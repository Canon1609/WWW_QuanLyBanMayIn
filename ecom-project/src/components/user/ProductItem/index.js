import { Button, Image } from "antd"
import thumbnail from "../../../assets/images/thumbnail.jpg"
import "./ProductItem.scss"
import { useEffect, useState } from "react"
import OpenAI from "openai";
import { useCart } from "../../../service/CartContext";
const ProductItem = () => {
    const [products, setProducts] = useState([]);
    const {cartItems , setCartItems , addToCart , updateQuantity , removeFromCart , getTotalPrice} = useCart()
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
    const limitProducts = products.slice(0,6);
    return (
        <>
            {limitProducts.map((item) => {
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