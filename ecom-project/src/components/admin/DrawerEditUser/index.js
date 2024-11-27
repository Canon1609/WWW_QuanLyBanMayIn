import { Button, Col, Drawer, Form, Image, Input, Modal, Row, Space } from "antd";
import { useEffect, useState } from "react";
import "./drawerEditUser.scss"
const EditFormUser = ({ user, onClose, visible, onSuccess }) => {
    const [form] = Form.useForm();
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        if (user) {
            form.setFieldsValue(user); // Gán giá trị productProps vào form
        }
    }, [user])


    const handleSubmit = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/user/${values.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",    
                },
                body: JSON.stringify({
                    id: values.id,
                    username: values.username,
                    password: values.password,
                    role: values.role,
                    shippingAddress: values.shippingAddress,
                    phone: values.phone,
                    email : values.email
                })
            });
            if (response.ok) {
                const result = await response.json();
                Modal.success({
                    content: "Cập nhật User thành công!",
                });
                onSuccess(result);
            }
            onClose(); // Đóng Drawer sau khi submit
        } catch (error) {
            console.error("Validation failed:", error);
        }
    };

    return (
        <>
            <Drawer
                title="Edit User"
                width={700}
                onClose={onClose}
                open={visible}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button  onClick={handleSubmit} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark form={form} initialValues={user}>

                    <Row gutter={16}>

                        <Col span={8}>
                            <Form.Item name="id" style={{ display: "none" }}>


                                <Input type="hidden" />

                                {/* <Form.Item name= "img" style={{display : 'none'}} ></Form.Item> */}
                                {/* <Form.Item name="inStock"></Form.Item> */}
                            </Form.Item>

                            <Form.Item
                                name="username"
                                label="User Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter user name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter product name" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                        <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter user password',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter product name" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                        <Form.Item
                                name="role"
                                label="Role"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter user's role",
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter user's role" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter user phone',
                                    },
                                ]}
                            >
                                <Input placeholder="please enter user's phone" />
                            </Form.Item>
                        </Col>
                        <Col span={18}>
                            <Form.Item
                                name="shippingAddress"
                                label="Shipping Address"
                                rules={[
                                    {
                                        required: true,
                                        message: "please enter users's shipping address ",
                                    },
                                ]}
                            >
                                <Input placeholder="please enter user's shipping address" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name= "email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user email',
                                },
                            ]}
                            >
                                <Input placeholder="Please enter user email" />
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </Drawer>
        </>
    );
}
export default EditFormUser