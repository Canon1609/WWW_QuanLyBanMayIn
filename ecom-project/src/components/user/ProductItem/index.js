import { Button, Image } from "antd"
import thumbnail from "../../../assets/images/thumbnail.jpg"
import "./ProductItem.scss"
import { useEffect } from "react"
const ProductItem = ()=>{
    useEffect(()=>{

        
    },[])
    return (
        <>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail} preview={false}></Image>
                </div>
                <p className="product-item__title">Máy in canon</p>
                <p className="product-item__price">Giá 10.000.000đ</p>
                <p className="product-item__inStock">in stock : 100</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail} preview={false}></Image>
                </div>
                <p className="product-item__title">Máy in canon</p>
                <p className="product-item__price">Giá 10.000.000đ</p>
                <p className="product-item__inStock">in stock : 100</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail} preview={false}></Image>
                </div>
                <p className="product-item__title">Máy in canon</p>
                <p className="product-item__price">Giá 10.000.000đ</p>
                <p className="product-item__inStock">in stock : 100</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail} preview={false}></Image>
                </div>
                <p className="product-item__title">Máy in canon</p>
                <p className="product-item__price">Giá 10.000.000đ</p>
                <p className="product-item__inStock">in stock : 100</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail} preview={false}></Image>
                </div>
                <p className="product-item__title">Máy in canon</p>
                <p className="product-item__price">Giá 10.000.000đ</p>
                <p className="product-item__inStock">in stock : 100</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail} preview={false}></Image>
                </div>
                <p className="product-item__title">Máy in canon</p>
                <p className="product-item__price">Giá 10.000.000đ</p>
                <p className="product-item__inStock">in stock : 100</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
        </>
    )
}
export default ProductItem