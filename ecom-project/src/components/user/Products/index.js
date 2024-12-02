import { Button, Image } from "antd";
import ProductItem from "../ProductItem"
import "./Products.scss"
import { Link, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../helper/convertMoney";
import { useCart } from "../../../service/CartContext";
const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const {cartItems , setCartItems , addToCart , updateQuantity , removeFromCart , getTotalPrice} = useCart()
    useEffect(()=>{
        const productList = async () => {
            try {
                const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/products');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const result = await response.json();
                setProducts(result.data);
                localStorage.setItem('product', JSON.stringify(result.data));
            } catch (error) {
                console.log(error.message);
                
            }
        }

              productList();
    },[])

    const productsSlice = products.slice(0, 5);
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

    };
    const handleDetail = (item) => {
        navigate(`/product/${item.id}`)
    }
    return (
        <>
            <div className="product-top">
                <h2>SẢN PHẨM NỔI BẬT</h2>
                <Button style={{ width: 100 }} type="primary" className="brand__btn" >
                    <Link to="/shop" style={{ display: 'flex', alignItems: 'center' }}>View all <FaRegArrowAltCircleRight style={{ fontSize: 15, marginLeft: 10 }} /></Link>
                </Button>
            </div>
            <div>
                <div className="product-slider">
                <Slider {...settings} >
                    {productsSlice.map((item, index) => {
                        return (
                            <div className="product-item" key={item.id}  >
                                <div className="product-item__img" onClick={()=>{handleDetail(item)}}>
                                    <Image src={item.img} preview={false}></Image>
                                </div>
                                <p className="product-item__title">{item.name}</p>
                                <p className="product-item__price">{formatCurrency(item.price)}</p>
                                {item.inStock <= 0 ? <p className="product-item__outStock">Tạm hết hàng</p> : ""}
                                <div>
                                    <button className="add-to-cart-btn" onClick={()=>{addToCart({id : item.id , name : item.name , price : item.price })}} >Thêm vào giỏ hàng</button>
                                </div>
                              
                            </div>
                        )
                    })}

                    
                </Slider>
                </div>
            </div>


        </>
    )
}
export default Product;