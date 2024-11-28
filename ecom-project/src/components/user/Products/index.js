import { Button, Image } from "antd";
import ProductItem from "../ProductItem"
import "./Products.scss"
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { formatCurrency } from "../../../helper/convertMoney";
const Product = () => {
    const [products, setProducts] = useState(
        localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    );
    console.log(products);

    const productsSlice = products.slice(0, 10);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    return (
        <>
            <div className="product-top">
                <h2>SẢN PHẨM NỔI BẬT</h2>
                <Button style={{ width: 100 }} type="primary" className="brand__btn" >
                    <Link to="/shop" style={{ display: 'flex', alignItems: 'center' }}>View all <FaRegArrowAltCircleRight style={{ fontSize: 15, marginLeft: 10 }} /></Link>
                </Button>
            </div>
            <div>
                {/* <ProductItem /> */}
                <div className="product-slider">
                <Slider {...settings} >
                    {productsSlice.map((item, index) => {
                        return (
                            <div className="product-item" key={item.id} >
                                <div className="product-item__img" >
                                    <Image src={item.img} preview={false}></Image>
                                </div>
                                <p className="product-item__title">{item.name}</p>
                                <p className="product-item__price">{formatCurrency(item.price)}</p>
                                {item.inStock <= 0 ? <p className="product-item__outStock">Tạm hết hàng</p> : ""}
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className="add-to-cart-btn"  >Thêm vào giỏ hàng</button>
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