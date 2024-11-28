import { Button, Image } from "antd";
import banner from "../../../assets/images/Remove-bg.ai_1728912614707.png";
import { formatCurrency } from "../../../helper/convertMoney";
const Banner = ()=>{
    return (
        <>
            <div className="banner">
            <div className="promo-content">
                <span className="promo-tag">Giảm giá cuối tuần</span>
                <h1>Ưu Đãi Cuối Tuần</h1>
                <p>“Thời gian vàng – giá không thể tốt hơn!”</p>
                <Button type="primary" className="shop-now-button">Xem ngay</Button>
                <div className="promo-price">
                    <span className="discount-price">{formatCurrency(7990000)}</span>
                    <span className="original-price">{formatCurrency(10000000)}</span>
                    <span className="promo-note">Giảm giá đến 20% cho các dòng máy in văn phòng.</span>
                </div>
            </div>
                <Image src= {banner} preview = {false}/>
            </div>
        </>
    )
}
export default Banner