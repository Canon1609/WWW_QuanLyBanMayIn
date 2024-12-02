import React, { useEffect, useState } from 'react';
import { Button, Col, Drawer, Form, Input, message, Modal, Row, Select, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {GetTokenSirv} from "../../../service/ApiService"
const { Option } = Select;
const AddProductForm = ({ onClose, visible }) => {
  const [token , setToken] = useState("");
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  
  useEffect(() => {
 
  }, [])

  const handleChange = (info) => {
    const { fileList: newFileList } = info;
    // Lưu fileList vào state và đảm bảo lấy đúng `originFileObj`
    const formattedFileList = newFileList.map((file) => ({
      ...file,
      originFileObj: file.originFileObj || file,
    }));
  
    setFileList(formattedFileList);
  };


  const handleFinish = async (values) => {
    
    // const values = await form.validateFields();


    
    const formData = new FormData();
    if (fileList.length > 0) {
      formData.append('file', fileList[0].originFileObj, fileList[0].originFileObj.name);
    }
       // Append other form data fields
    formData.set('name', values.name);
    formData.set('price', values.price);
    formData.set('categoryId', values.categoryId);
    formData.set('inStock', values.inStock);
    formData.set('ram', values.ram);
    formData.set('sizePage', values.sizePage);
    formData.set('description', values.description);
   

    try {
      const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/products`, {
        method: 'POST',
        headers: {
           'Content-Type': 'multipart/form-data'
        },
        body: formData
      })
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        Modal.success({
          content: "Thêm sản phẩm thành công!",
        });
      }
      else {
        // Handle non-2xx HTTP status codes (API response errors)
        const errorData = await response.json();
        console.error("API response error:", errorData);
        Modal.error({ content: "Thêm sản phẩm thất bại!" }); // Assuming Modal is a UI component
      }
      onClose(); // Đóng Drawer sau khi submit
    } 
    catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <>
      <Drawer
        title="Add product"
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
            {/* <Button onClick={handleFinish} type="primary">
              Submit
            </Button> */}
          </Space>
        }
      >
        <Form layout="vertical" form={form} onFinish={handleFinish} >
          <Row gutter={16}>
            <Col span={12}>
              {/* <Form.Item name="id" style={{ display: "none" }}>
                <Input type="hidden" />
                <Form.Item name="img" ></Form.Item>
              </Form.Item> */}

              <Form.Item
                name="name"
                label="Name"
                type="text"
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
            <Col span={12}>
              <Form.Item
                name="price"
                label="Price"
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
                label="Category"
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
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="inStock"
                label="In Stock"
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
                label="Ram"
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
                label="Size Page"
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
              <Form.Item
                label="Upload Image"
                rules={[{ required: true, message: 'Please upload an image!' }]}
              >
                <Upload
                  beforeUpload={() => false} // Chặn upload tự động, chỉ lưu file vào state
                  fileList={fileList}
                  onChange={handleChange}
                  accept="image/*" // Chỉ chấp nhận file ảnh
                  maxCount={1} // Chỉ cho phép 1 ảnh
                >
                  <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>

            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default AddProductForm;