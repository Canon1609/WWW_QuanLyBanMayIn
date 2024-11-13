import React, { useEffect, useState } from 'react';
import { Drawer, Button, List, Typography, Divider, InputNumber, Image, Badge } from 'antd';
import { FaCartShopping } from 'react-icons/fa6';
import './Cart.scss'; // Đảm bảo bạn có file CSS để chỉnh sửa thêm

const Cart = () => {
    const [visible, setVisible] = useState(false);
 
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(()=>{
        const LocalStoreCart = localStorage.getItem('cart');
        if(LocalStoreCart){
            setCartItems(JSON.parse(LocalStoreCart))
        }
    },[])
    // // Tính tổng giá
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    // Cập nhật số lượng sản phẩm
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Hiển thị Drawer
    const showDrawer = () => {
        setVisible(true);
    };

    // Đóng Drawer
    const onClose = () => {
        setVisible(false);
    };

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
                    <Button type="primary" block>
                        Checkout
                    </Button>
                }
            >
                {/* Danh sách sản phẩm */}
                <List
                    dataSource={cartItems}
                    renderItem={(item) => (
                        <List.Item style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                {/* Hình ảnh sản phẩm */}
                                <Image src={item.image} width={80} height={80} style={{ borderRadius: 8, marginRight: 16 }} />

                                {/* Thông tin sản phẩm */}
                                <div style={{ flex: 1 }}>
                                    <Typography.Text strong>{item.name}</Typography.Text>
                                    <br />
                                    <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
                                        ${item.price} / item
                                    </Typography.Text>
                                </div>

                                {/* Số lượng và tổng giá từng sản phẩm */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <InputNumber
                                        min={0}
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
                    <Typography.Text>${getTotalPrice()}</Typography.Text>
                </div>
            </Drawer>
        </>
    );
};

export default Cart;
