import React, { useEffect, useState } from 'react';
import { Button, Col, Drawer, Form, Input,Modal,Row, Select, Space } from 'antd';
const { Option } = Select;
const EditForm = ({ product , onClose , visible , onSuccess  }) => {
  const [form] = Form.useForm();  
  useEffect(()=>{
    if(product){
      console.log(product); 
      form.setFieldsValue(product); // Gán giá trị productProps vào form
    }
  },[product])
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/products/${values.id}`,{
        method : 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify({
          id : values.id,
          name: values.name,
          description: values.description,
          img: values.img,
          inStock: values.inStock,
          price: values.price,
          sizePage: values.sizePage,
          ram: values.ram,
          category: {
            id : values.categoryId
          }
        })
      })
      if(response.ok){
        const result = await response.json();
        console.log(result);
        Modal.success({
          content: "Cập nhật sản phẩm thành công!",
      });
      onSuccess(); // Gọi hàm onSuccess để reload lại dữ liệu
      
      }
      onClose(); // Đóng Drawer sau khi submit
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };
  
  return (
    <>
      <Drawer
        title="Cập nhật sản phẩm"
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
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form}  initialValues={product}>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item name="id" style={{ display: "none" }}>
            <Input type="hidden" />
            <Form.Item name= "img" style={{display : 'none'}} ></Form.Item>
            {/* <Form.Item name="inStock"></Form.Item> */}
        </Form.Item>
        
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product name',
                  },
                ]}
              >
                <Input placeholder="Please enter product name"  />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Giá"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please enter url',
                //   },
                // ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  placeholder="Please enter price"
               
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="categoryId"
                label="Loại sản phẩm"
                rules={[
                  {
                    required: true,
                    message: 'Please select an owner',
                  },
                ]}
              >
                {/* <Select placeholder="Please select category">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select> */}
                <Input/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="inStock"
                label="Số lượng trong kho"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
              <Input></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ram"
                label="Bộ nhớ"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please choose the ram',
                //   },
                // ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="16">16GB</Option>
                  <Option value="8">8GB</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="sizePage"
                label="Khổ giấy in"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please choose the ram',
                //   },
                // ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="A3">A3</Option>
                  <Option value="A4">A4</Option>
                  <Option value="A5">A5</Option>
                  <Option value="A0">A0</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Mô tả sản phẩm"
                rules={[
                  {
                    required: true,
                    message: 'vui lòng nhập mô tả cho sản phẩm',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder='vui lòng nhập mô tả cho sản phẩm' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default EditForm;