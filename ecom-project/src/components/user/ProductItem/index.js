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