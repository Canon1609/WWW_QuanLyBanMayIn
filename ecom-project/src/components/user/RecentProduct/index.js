import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../helper/convertMoney";
import { useCart } from "../../../service/CartContext";

const RecentProduct = () => {
    const navigate = useNavigate();
    const {cartItems , setCartItems , addToCart , updateQuantity , removeFromCart , getTotalPrice} = useCart()
    const [recentProduct, setRecentProduct] = useState([]);
    useEffect(() => {
        setRecentProduct(JSON.parse(localStorage.getItem('cart')) || []);
        recentProduct.map((item) => {
            return fetch(`http://localhost:8080/BE_PrinterShop/api/v1/products/${item.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setRecentProduct((prev) => [...prev, data.data]);
        })})
    }, []);

 
console.log(recentProduct);


    const handleDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <>
              <div className="product-top">
                <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                    <h2>Đã xem gần đây</h2>
              
                </div>

                <Button style={{ width: 100 }} type="primary" className="brand__btn" >
                    <Link to="/shop" style={{ display: 'flex', alignItems: 'center' }}>View all <FaRegArrowAltCircleRight style={{ fontSize: 15, marginLeft: 10 }} /></Link>
                </Button>

            </div>
            <div>
                <div className="product">
                    {recentProduct.map((item, index) => {
                        return (
                            <div className="product-item" key={item.id}>
                            <div className="product-item__img" onClick={()=>{handleDetail(item.id)}}>
                                <Image src={item.img} preview={false}></Image>
                            </div>
                            <p className="product-item__title">{item.name}</p>
                            <p className="product-item__price">{formatCurrency(item.price)}</p>
                            {item.inStock <= 0 ? <p className="product-item__outStock">Tạm hết hàng</p> : ""}
                            <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                            <button className="add-to-cart-btn" onClick={()=> addToCart({id : item.id , name : item.name , price : item.price })} >Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default RecentProduct;
