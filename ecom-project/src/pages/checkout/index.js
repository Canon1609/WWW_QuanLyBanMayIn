import React, { useContext, useState } from 'react';
import { Form, Input, Button, Select, DatePicker, message, Row, Col, Card, List, Checkbox, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CartProvider, useCart } from '../../service/CartContext';
import Cart from '../user/Cart';
import { formatCurrency } from '../../helper/convertMoney';

const { Title, Text } = Typography;

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems, setCartItems } = useCart();

  const userName = JSON.parse(localStorage.getItem('userName')) || '';

  const [isChecked, setIsChecked] = useState(false); // State to manage the checkbox
  const navigate = useNavigate(); // Use `useNavigate` instead of `useHistory`


  const onFinish = (values) => {
    const fetchChekout = async () => {
      try {
        const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/checkout', {
          method: "POST",
          body: JSON.stringify(order),
        });
        if (response.ok) {
          const result = await response.json();
          message.success('Order placed successfully!');
          navigate('/');
          setCartItems([]);
          setLoading(false)
        }

      } catch (error) {
        // console.error(`Failed to fetch product details: ${error}`);
        setLoading(false)
      }

    }
    setLoading(true);
    const createAt = new Date().toLocaleDateString();
    const items = cartItems.map((item) => ({ productId: item.id, quantity: item.quantity, price: item.price }));
    const order = {
      userName: userName,
      createAt: createAt,
      status: "PENDING",
      shippingAddress: values.shippingAddress,
      paymentMethod: values.paymentMethod,
      phone: values.phone,
      email: values.email,
      totalPrice: totalPrice,
      items: items,
    }

    fetchChekout();
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const createAt = new Date().toLocaleDateString();
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={1} style={{ textAlign: 'center' }} >Thanh Toán</Title>
      <Row gutter={24}>
        {/* Left side: Form */}
        <Col xs={24} md={12}>
          <Card bordered={false} style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Form
              name="checkout"
              onFinish={onFinish}
              layout="vertical"
              initialValues={{ remember: true }}
              style={{ maxWidth: '600px' }}
            >
              <Form.Item
                name="shippingAddress"
                label="Địa chỉ nhận hàng"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ nhận hàng!' }]}
              >
                <Input.TextArea rows={2} style={{ borderRadius: '8px' }} />
              </Form.Item>

              <Form.Item
                name="paymentMethod"
                label="Phương thức thanh toán"
                rules={[{ required: true, message: 'Please select a payment method!' }]}
              >
                <Select placeholder="Select payment method" style={{ borderRadius: '8px' }}>
                  <Select.Option value="bank">Tài khoản ngân hàng</Select.Option>
                  <Select.Option value="pwa">Thanh toán khi nhận hàng</Select.Option>
                  <Select.Option value="momo">Momo</Select.Option>
                </Select>
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input type="email" style={{ borderRadius: '8px' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input style={{ borderRadius: '8px' }} />
                  </Form.Item>
                
                </Col>
              
              </Row>

              <Row>
              <Col span={12}>
                <Form.Item>
                    <Button

                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      style={{ marginLeft : '50%',  borderRadius: '8px'  , width : '100%' }}
                    >
                      Thanh toán
                    </Button>
                  </Form.Item>
                  </Col>
              </Row>


            </Form>

          </Card>
        </Col>

        {/* Right side: Your Order */}
        <Col xs={24} md={12}>
          <Title level={3} >Đơn hàng của bạn</Title>
     
          <Card>
            {/* <div className='coupon'>
              <p style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Khuyến mãi</p>
              <Input placeholder='Nhập mã giảm giá' ></Input>
            </div> */}
            <div>
            <List
              dataSource={cartItems}
              renderItem={item => (
                <List.Item style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <strong>{item.name}</strong><br />
                    {item.quantity} x {formatCurrency(item.price)} = {formatCurrency(item.price * item.quantity)}
                  </div>
                </List.Item>
              )}
            />
            <div style={{ marginTop: '20px' }}>
              <Text style={{fontSize : '20px' , fontWeight : 600}} strong>Tổng tiền : {formatCurrency(totalPrice)}</Text>
            </div>

            <Form.Item
              name="coupon"
              label="Mã khuyến mãi"
              style={{ marginTop: '16px' }}
            >
              <Input placeholder="Vui lòng nhập mã khuyến mãi" style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)} // Update checkbox state
              style={{ marginBottom: '16px' }}
            >
              Tôi đã đọc và đồng ý với các điều khoản của shop.
            </Checkbox>
            <Button
          
              type="primary"
              block
              style={{
                marginTop: '10px',
                borderRadius: '8px',
                backgroundColor: isChecked ? '#1890ff' : '#d9d9d9',
                borderColor: isChecked ? '#1890ff' : '#d9d9d9',
              }}
              disabled={!isChecked} // Disable the button if the checkbox is not checked
              
            >
              Thanh Toán
            </Button>
            </div>
          </Card>
       
        

        </Col>
      </Row>
              
    </div>
  );
};

export default CheckoutPage;
