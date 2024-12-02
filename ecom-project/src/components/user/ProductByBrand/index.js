import { Button, Image, Select } from "antd";
import ProductItem from "../ProductItem"
import "./ProductByBrand.scss"
import { Link, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../helper/convertMoney";
import { useCart } from "../../../service/CartContext";
const ProductByBrand = () => {

    const { Option } = Select;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const {cartItems , setCartItems , addToCart , updateQuantity , removeFromCart , getTotalPrice} = useCart()

    const handleChange = (value) => {
        setSelectedOption(value);
    };
    useEffect(() => {
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
    }, [])


    // product order by brand 
    const productsByBrand = products.filter((item) => {
        if (selectedOption === '') {
            return item;
        } else if (item.brand === selectedOption) {
            return item;
        }
    })

    const handleDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <>
            <div className="product-top">
                <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                    <h2>SẢN PHẨM THEO THƯƠNG HIỆU</h2>
                    <Select
                        defaultValue=""
                        style={{ width: 120, marginLeft: 20 }}
                        onChange={handleChange}
                        placeholder="Brand"
                    >
                        <Option value="HP">HP</Option>
                        <Option value="Brother">Brother</Option>
                        <Option value="Canon">Canon</Option>
                    </Select>
                </div>

                <Button style={{ width: 100 }} type="primary" className="brand__btn" >
                    <Link to="/shop" style={{ display: 'flex', alignItems: 'center' }}>View all <FaRegArrowAltCircleRight style={{ fontSize: 15, marginLeft: 10 }} /></Link>
                </Button>

            </div>
            <div>
                <div className="product">
                    {productsByBrand.map((item, index) => {
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
export default ProductByBrand;