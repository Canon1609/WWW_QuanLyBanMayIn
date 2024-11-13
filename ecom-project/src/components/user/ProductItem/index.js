import { Button, Image } from "antd"
import thumbnail from "../../../assets/images/thumbnail.jpg"
import "./ProductItem.scss"
import { useEffect, useState } from "react"
import OpenAI from "openai";
const ProductItem = () => {
    const [products, setProducts] = useState([]);
    // tạo giỏ hàng từ localStore nếu có
    const [cart , setCart] = useState(()=>{
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    })
    // hàm để lưu giỏ hàng vào localStorage
    const saveCartToStorage = (cartData)=>{
        localStorage.setItem('cart',JSON.stringify(cartData));
    }
    // hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product)=>{
        // kiểm tra sản phẩm đã có trong giỏ hàng chưa
        const exisProduct = cart.some(item=>item.id === product.id);
        if(exisProduct){
            // nếu có tăng số lượng sản phẩm
            const updateCart = cart.map(item=>item.id ===product.id ? {...item , quantity : item.quantity + 1} : item);
            setCart(updateCart)
            saveCartToStorage(updateCart)
        }
        else{
            // nếu chưa có thêm sản phẩm mới
            const updateCart = [...cart , {...product , quantity : 1}];
            setCart(updateCart)
            saveCartToStorage(updateCart)
        }
    }
    // xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) =>{
        const updateCart = cart.filter(item => item.id !== productId);
        setCart(updateCart)
        saveCartToStorage(updateCart);
    }
    // hàm tính tổng tiền trong giỏ hàng
    const calTotal = ()=>{
        return cart.reduce((total,item)=> total + item.quantity * item.price , 0);
    }
   // const apiKey = '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';
   // const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    // const generateText = async (message) => {
    //     try {
    //         const response = await fetch(apiEndpoint,{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${apiKey}`
    //             },
    //             body: JSON.stringify({
    //                 model: "gpt-4",
    //                 messages: [{ role: "user", content: message }],
    //                 max_tokens: 500,  // Số lượng token tối đa (tùy chỉnh theo nhu cầu)
    //                 temperature: 0.7  // Hệ số nhiệt độ (điều chỉnh độ sáng tạo)
    //             })
    //         })
    //         // Kiểm tra nếu phản hồi thành công
    //         if (!response.ok) {
    //             throw new Error(`Error: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         // Trích xuất và trả về nội dung của ChatGPT
    //         return data.choices[0].message.content;
    //     }
    //     catch(error){
    //         console.error("API fetch error:", error);
    //         return "Có lỗi xảy ra khi kết nối với ChatGPT." ;
    //     }
     
    // }


    useEffect(() => {
        //  call api lấy danh sách sản phẩm
        const productList = async () => {
            try {
                const response = await fetch('http://localhost:8080/BE_PRINTER/api/v1/products');
                const result = await response.json();
                
                setProducts(result.data)

            } catch (error) {
                alert(error);
            }
        }
        productList();
        // generateText("kế hoạch ôn tập toeic 450")
        // .then(res=>{
        //     console.log("Phản hồi từ GPT-4: "  ,res);
        // })
    }, [])
    console.log(products);
    return (
        <>
            {products.map((item) => {
                return (
                    <div className="product-item">
                        <div className="product-item__img">
                            <Image src={thumbnail} preview={false}></Image>
                        </div>
                        <p className="product-item__title">{item.name}</p>
                        <p className="product-item__price">{item.price}đ</p>
                        <p className="product-item__inStock">InStock : {item.inStock}</p>
                        <button className="add-to-cart-btn" onClick={()=> addToCart({id : item.id , name : item.name , price : item.price })} >add to cart</button>
                    </div>
                )
            })}


        </>


    )
}
export default ProductItem