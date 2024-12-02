import { Button, Col, Drawer, Form, Input, Modal, Row, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect } from "react";

const AddCustomerForm = ({onClose , visible}) => {
    const [form] = Form.useForm();
    useEffect(() => {
  
    }, [])
    const handleSubmit = async () => {
        const values = await form.validateFields();
        // prepare payload
        const payload = {
          username : values.username,
          password : values.password,
          phone : values.phone,
          email : values.email,
          shippingAddress : values.shippingAddress,
          role : values.role
        }
    
        try {
          const response = await fetch(`http://localhost:8080/BE_PrinterShop/api/v1/user/add`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
          if (response.ok) {
            const result = await response.json();
            if(result.status ===  400){
              Modal.error({
                content: "Email đã tồn tại!",
              });
            }
            else
            { 
              Modal.success({
                content: "Thêm User thành công!",
              });
            }
         
          }
          onClose(); // Đóng Drawer sau khi submit
        } catch (error) {
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
                <Button onClick={handleSubmit} type="primary">
                  Submit
                </Button>
              </Space>
            }
          >
            <Form layout="vertical" form={form} >
              <Row gutter={16}>
                <Col span={12}>
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
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="password"
                    label="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter use password',
                    },
                  ]}
                  >
                    <Input
                      style={{
                        width: '100%',
                      }}
                      placeholder="Please enter use password"
    
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Phone"
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
                    <Input placeholder="Please enter user phone" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter user email',
                      },
                    ]}
                  >
                    <Input type="email" placeholder="please enter user email"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="shippingAddress"
                    label="Shipping Address"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'Please choose the ram',
                  //   },
                  // ]}
                  >
                  <Input placeholder="Please enter user shipping address" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="role"
                    label="Role"
                  rules={[
                    {
                      required: true,
                      message: 'Please choose the role',
                    },
                  ]}
                  >
                    <Select placeholder="Please choose the approver">
                      <Option value="user">User</Option>
                      <Option value="admin">Admin</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            
    
              
            </Form>
          </Drawer>
        </>
      );
}
export default AddCustomerForm;