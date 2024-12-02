import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Image } from "antd";
import hp from "../../../assets/images/brand/hp.png"
import { useState } from "react";
const SliderProduct = ({products}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      
      };
    return(
        <>
                <div>
                <Slider {...settings} >
                    {products.map((product, index) => (
                        <>
                            <div key={index} style={{height : '270px'}}>
                                <div style={{height : '100px' , width : "100%", aspectRatio : 1}}>
                                <Image src= "https://huyyyy.sirv.com/printer/products/borther1.webp" preview={false} alt="hp" width="100%" height="100%"/>
                                </div>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>{product.inStock}</p>
                                
                            </div>
                        </>
                    ))}
                    
                </Slider>
                </div>
              
         
        </>
    )
}
export default SliderProduct