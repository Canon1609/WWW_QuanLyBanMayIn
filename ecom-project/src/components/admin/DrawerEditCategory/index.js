import React, { useEffect, useState } from 'react';
import { Button, Col, Drawer, Form, Image, Input, Modal, Row, Select, Space, Spin } from 'antd';
const { Option } = Select;
const EditForm = ({ category, onClose, visible, onSuccess }) => {
    const [form] = Form.useForm();
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        if (category) {
            form.setFieldsValue(category); // Gán giá trị productProps vào form
        }
    }, [category])


    const handleSubmit = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/categories/${values.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: values.id,
                    name: values.name,
                    description: values.description,
                    imguri: values.imguri,
                    products: values.products
                })
            })
            if (response.ok) {
                const result = await response.json();
                Modal.success({
                    content: "Cập nhật category thành công!",
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
                title="Edit Category"
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
                <Form layout="vertical" hideRequiredMark form={form} initialValues={category}>

                    <Row gutter={16}>

                        <Col span={12}>
                            <Form.Item name="id" style={{ display: "none" }}>


                                <Input type="hidden" />

                                {/* <Form.Item name= "img" style={{display : 'none'}} ></Form.Item> */}
                                {/* <Form.Item name="inStock"></Form.Item> */}
                            </Form.Item>

                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter product name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter product name" />
                            </Form.Item>
                        </Col>

                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="products" style={{ display: "none" }} />

                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter url description" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="imguri" label="Image"/>
                            <Image src={form.getFieldValue('imguri')} alt='Preview' preview={false} ></Image>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};
export default EditForm;