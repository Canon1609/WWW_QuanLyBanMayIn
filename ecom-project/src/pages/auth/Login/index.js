
import { Breadcrumb, Button, Checkbox, Form, Input, message } from "antd"
import "./Login.scss"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../auth/cookie";
// import { useAuth } from "../../helper/AuthContext/AuthContext";
const Login = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const wellcome = (username) => {
        messageApi.open(
            {
                contentBg : '#ffffff',
                type: 'success',
                content: `wellcome , ${username}`
            }
        )
    }
    const LoginFail = () => {
        messageApi.open({
            type: 'warning',
            content: 'Tài khoản hoặc mật khẩu không chính xác !'
        })
    }
    // const {login} = useAuth();
    const [isUserLogin, setIsUserLogin] = useState(true);
    // xử lý login
    const handleLogin = async (values) => {
        const { username, password } = values;
        try {
            const res = await fetch('http://localhost:8080/BE_PRINTER/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            if (res.ok) {
                const data = await res.json();    
                if(data.status === 200)
                {
                    wellcome(username);
                    setTimeout(()=>{
                        // navigate("/" , login(data.username,data.token))
                        navigate("/")
                    },2500)      
                }
               else  
               LoginFail();

            }
            else {
               LoginFail();
            }
        } catch (error) {
            console.error("Login failed : " , error);
            LoginFail();
        }
       
    }
    return (
        <>
            {contextHolder}
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: 'My Account',
                    },
                ]}
            />
            {isUserLogin ? (<>
                <h2 className="form__title">LOGIN</h2>
                <Form
                    className="form"
                    name="login"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleLogin}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
                            Login
                        </Button>
                    </Form.Item>

                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <p>If you don't have account <a href=""> Register </a> </p>
                    </Form.Item>
                </Form>

            </>) : (<>
                <h2 className="form__title">REGISTER</h2>
                <Form
                    className="form"
                    name="login"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email address"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: 'purple' }} >
                            Register
                        </Button>
                    </Form.Item>
                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <p>If you have account <a href="#" >Sign In</a> </p>
                    </Form.Item>
                </Form>
            </>)}




        </>


    )
}
export default Login