import React, { useEffect, useState } from 'react';
import { Drawer, Button, List, Typography, Divider, InputNumber, Image, Badge } from 'antd';
import { FaCartShopping } from 'react-icons/fa6';
import './Cart.scss'; // Đảm bảo bạn có file CSS để chỉnh sửa thêm
import { useCart } from '../../../service/CartContext';
import { calc } from 'antd/es/theme/internal';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../helper/convertMoney';

const Cart = () => {
    const [visible, setVisible] = useState(false);
    const { cartItems, setCartItems, addToCart, updateQuantity, removeFromCart, getTotalPrice } = useCart()
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const productList = async () => {
            try {
                const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/products');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const result = await response.json();
                setProducts(result.data);
            } catch (error) {
                console.log(error.message);
                
            }
        }

              productList();
    },[])
    
    // Hiển thị Drawer
    const showDrawer = () => {
        setVisible(true);
    };

    // Đóng Drawer
    const onClose = () => {
        setVisible(false);
    };
    // hàm xử lý khi người dùng nhấn checkout
    const handleCheckout = () => {
        setVisible(false);
        navigate('/checkout');
    }
    return (
        <>
            {/* Icon giỏ hàng với hiệu ứng badge */}
          
            <Badge count={cartItems.length} overflowCount={99} offset={[15, 0]} style={{ backgroundColor: "blueviolet", color: 'white' }}>
                <FaCartShopping onClick={showDrawer} style={{ fontSize: 35, cursor: 'pointer', color: '#333' }} />
            </Badge>
            {/* Drawer giỏ hàng */}
            <Drawer
                title="Giỏ hàng của bạn"
                placement="right"
                onClose={onClose}
                visible={visible}
                width={400}
                footer={
                    <div style={{display : 'flex' , justifyContent : 'center' }}>
                        <Button type="primary" block style={{ width: 200, padding: 20 }} onClick={handleCheckout}>
                             Thanh Toán
                        </Button>
                    </div>

                }
            >
                {/* Danh sách sản phẩm */}
                <List
                    dataSource={cartItems}
                    
                    renderItem={(item) => (      
                                         
                        <List.Item style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                {/* Hình ảnh sản phẩm */}
                                <div style={{ width: 150, height: 100, aspectRatio: 1 }}>
                                    <Image preview={false} style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={products.find((pro) => pro.id === item.id).img } width={80} height={80} />

                                </div>

                                {/* Thông tin sản phẩm */}
                                <div style={{ flex: 1 }}>
                                    <Typography.Text strong>{item.name}</Typography.Text>
                                    <br />
                                    <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
                                        {formatCurrency(item.price)}
                                       
                                    </Typography.Text>
                                </div>

                                {/* Số lượng và tổng giá từng sản phẩm */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <InputNumber
                                        min={0}
                                        max={products.find((product) => product.id === item.id).inStock}
                                        value={item.quantity}
                                        onChange={(value) => updateQuantity(item.id, value)}
                                        style={{ marginBottom: 8 }}
                                    />
                                    <Typography.Text strong style={{ color: '#1890ff' }}>
                                        {formatCurrency(item.quantity * item.price)}
                                     
                                    </Typography.Text>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />

                {/* Tổng giá */}
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
                    <Typography.Text>Tổng tiền :</Typography.Text>
                    <Typography.Text>{formatCurrency(getTotalPrice())}</Typography.Text>
                </div>
            </Drawer>
        </>
    );
};

export default Cart;
