import React, { useEffect, useState } from 'react';
import { Drawer, Button, List, Typography, Divider, InputNumber, Image, Badge } from 'antd';
import { FaCartShopping } from 'react-icons/fa6';
import './Cart.scss'; // Đảm bảo bạn có file CSS để chỉnh sửa thêm
import { useCart } from '../../../service/CartContext';
import { calc } from 'antd/es/theme/internal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [visible, setVisible] = useState(false);
    const { cartItems, setCartItems, addToCart, updateQuantity, removeFromCart, getTotalPrice } = useCart()
    const navigate = useNavigate();
    const products = JSON.parse(localStorage.getItem('products')) || [];


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
            <Badge count={cartItems.length} overflowCount={99} offset={[0, 0]} style={{ backgroundColor: '#ff4d4f', color: 'white' }}>
                <FaCartShopping onClick={showDrawer} style={{ fontSize: 35, cursor: 'pointer', color: '#333' }} />
            </Badge>

            {/* Drawer giỏ hàng */}
            <Drawer
                title="Your Cart"
                placement="right"
                onClose={onClose}
                visible={visible}
                width={400}
                footer={
                    <div style={{display : 'flex' , justifyContent : 'center' }}>
                        <Button type="primary" block style={{ width: 200, padding: 20 }} onClick={handleCheckout}>
                            Checkout
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
                                    <Image preview={false} style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={"https://huyyyy.sirv.com/Images/D%C3%B2ng%20m%C3%A1y%20in%20ph%C3%B9%20h%E1%BB%A3p%20cho%20gi%E1%BA%A5y%20in%20%E1%BA%A3nh%201(1).jpg"} width={80} height={80} />

                                </div>

                                {/* Thông tin sản phẩm */}
                                <div style={{ flex: 1 }}>
                                    <Typography.Text strong>{item.name}</Typography.Text>
                                    <br />
                                    <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
                                        ${item.price}
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
                                        ${item.quantity * item.price}
                                    </Typography.Text>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />

                {/* Tổng giá */}
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
                    <Typography.Text>Total Price:</Typography.Text>
                    <Typography.Text>${getTotalPrice().toFixed(2)}</Typography.Text>
                </div>
            </Drawer>
        </>
    );
};

export default Cart;
