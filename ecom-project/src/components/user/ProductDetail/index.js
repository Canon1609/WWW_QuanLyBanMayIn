import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Rate, Tabs, Button, InputNumber } from "antd";
import { useCart } from "../../../service/CartContext";
import "./ProductDetail.scss";
import { FaCartPlus } from "react-icons/fa6";
import { formatCurrency } from "../../../helper/convertMoney";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/BE_PRINTER/api/v1/products/${id}`
        );
        const result = await response.json();
        setProduct(result.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };
    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ id: product.id, name: product.name, price: product.price, quantity });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-page">
        <div className="product-detail" >
            <div className="product-detail__image">
                <Image src= "https://huyyyy.sirv.com/Images/D%C3%B2ng%20m%C3%A1y%20in%20ph%C3%B9%20h%E1%BB%A3p%20cho%20gi%E1%BA%A5y%20in%20%E1%BA%A3nh%201(1).jpg" preview = {false} />
            </div>
            <div className="product-detail__info">
                <h1>Máy in HP 3d siêu nhanh 2024 </h1>
                {/* <Rate disabled defaultValue= {5} /> */}
                <p> Size Page : {product.sizePage}</p>
                <p className="product-detail__info-ram"> Ram : {product.ram} MB</p>
                <p  className="product-detail__info-price" > {formatCurrency(product.price)}</p>
                <p >In stock: {product.inStock}</p>
                <p>{product.description}</p>
                <div className="product-detail__quantity">
               
                <InputNumber
                    size="large"            
                    min={1}
                    max={product.inStock}
                    defaultValue={1}
                    onChange={(value) => setQuantity(value)}
                />
                  <Button icon = {<FaCartPlus/>} type="primary" onClick={handleAddToCart} style={{ width : 150 , height : 40 , marginLeft : 20 , backgroundColor : 'green'}}>
                    Add to cart
                    </Button>
                </div>
              
            </div>
        </div>

  
    </div>
    
  );
};

export default ProductDetail;
