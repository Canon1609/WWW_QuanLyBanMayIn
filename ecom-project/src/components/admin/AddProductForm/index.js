import React, { useEffect, useState } from 'react';
import { Button, Col, Drawer, Form, Input, message, Modal, Row, Select, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;
const AddProductForm = ({ onClose, visible }) => {
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

  async function uploadToSirv(file) {
    const SIRV_TOKEN = "YOUR_SIRV_TOKEN"; // Thay bằng token của bạn
    const SIRV_UPLOAD_URL = "https://api.sirv.com/v2/files/upload";

    const formData = new FormData();
    formData.append("file", file, file.name);

    try {
        const response = await fetch(SIRV_UPLOAD_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${SIRV_TOKEN}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { error: errorData.message || "Lỗi không xác định" };
        }

        const result = await response.json();
        return result; // Trả về đối tượng chứa `fileUrl`
    } catch (error) {
        console.error("Lỗi upload Sirv:", error);
        return { error: error.message };
    }
}
  const handleSubmit = async () => {
    const values = await form.validateFields();
    if (!values.file) {
      Modal.error({
        content: "Vui lòng upload ảnh sản phẩm"
      })
    }
    if (fileList.length === 0) {
      message.error("Vui lòng tải lên ít nhất một ảnh!");
      return;
    }
    // Lấy file đầu tiên và chuyển thành Base64
    const base64Image = await getBase64(fileList[0].originFileObj);
    // const pureBase64 = base64Image.replace(/^data:image\/\w+;base64,/, ''); // Loại bỏ phần tiền tố
    // prepare the payload 
    const payload = {
      name: values.name,
      price: values.price,
      ram: values.ram,
      inStock: values.inStock,
      sizePage: values.sizePage,
      description: values.description,
      img: base64Image

    }

    try {
      const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/products/add`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        Modal.success({
          content: "Thêm sản phẩm thành công!",
        });
      }
      onClose(); // Đóng Drawer sau khi submit
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };
  // Hàm chuyển file thành Base64
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form} >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="id" style={{ display: "none" }}>
                <Input type="hidden" />
                <Form.Item name="img" ></Form.Item>
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

            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default AddProductForm;