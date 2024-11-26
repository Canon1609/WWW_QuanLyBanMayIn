import { Button, Image, Modal } from "antd"
import thumbnail from "../../../assets/images/thumbnail.jpg"
import "./ProductItem.scss"
import { useEffect, useState } from "react"
import OpenAI from "openai";
import { useCart } from "../../../service/CartContext";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { formatCurrency } from "../../../helper/convertMoney";
const ProductItem = () => {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem('products')) || []
    );
    const {cartItems , setCartItems , addToCart , updateQuantity , removeFromCart , getTotalPrice} = useCart()
    const navigate = useNavigate();
    useEffect(() => {
        //  call api lấy danh sách sản phẩm
        const productList = async () => {
            try {
                const response = await fetch('http://localhost:8080/BE_PRINTER/api/v1/products');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const result = await response.json();
                localStorage.setItem('products', JSON.stringify(result.data))
            } catch (error) {
                console.log(error.message);
                
            }
        }
        productList();
    }, [])
    const handleDetail = (id) => {
        navigate(`/product/${id}`)
    }
    // const limitProducts = products.slice(0,6);
    return (
        <>
            {products.map((item) => {
                return (
                    <div className="product-item" key={item.id}>
                        <div className="product-item__img" onClick={()=>{handleDetail(item.id)}}>
                            <Image src={item.img } preview={false}></Image>
                        </div>
                        <p className="product-item__title">{item.name}</p>
                        <p className="product-item__price">{formatCurrency(item.price)}</p>
                        {item.inStock <= 0 ? <p className="product-item__outStock">Out of Stock</p> : ""}
                        <button className="add-to-cart-btn" onClick={()=> addToCart({id : item.id , name : item.name , price : item.price })} >add to cart</button>
                    </div>
                   
                )
            })}


        </>


    )
}
export default ProductItem