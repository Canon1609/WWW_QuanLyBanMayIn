import { Button, Image } from "antd";
import banner from "../../../assets/images/Remove-bg.ai_1728912614707.png";
const Banner = ()=>{
    return (
        <>
            <div className="banner">
            <div className="promo-content">
                <span className="promo-tag">Weekend Discount</span>
                <h1>Get the best quality products at the lowest prices</h1>
                <p>We have prepared special discounts for you on organic breakfast products.</p>
                <Button type="primary" className="shop-now-button">Shop Now</Button>
                <div className="promo-price">
                    <span className="discount-price">$21.67</span>
                    <span className="original-price">$59.99</span>
                    <span className="promo-note">Don’t miss this limited time offer.</span>
                </div>
            </div>
                <Image src= {banner} preview = {false}/>
            </div>
        </>
    )
}
export default Banner