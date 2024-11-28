
import { Breadcrumb, Button, Checkbox, Form, Input, message } from "antd"
import "./Login.scss"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../auth/cookie";
import { useAuth } from "../../../auth/AuthContext";
// import { useAuth } from "../../helper/AuthContext/AuthContext";
const Login = () => {
    const [isLogin , setIsLogin] = useState(true);
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
    const wellcomereg = (username) => {
        messageApi.open(
            {
                contentBg : '#ffffff',
                type: 'success',
                content: `Chào mừng đến với website của chúng tôi , ${username} vui lòng đăng nhập để mua sắm !`
            }
        )
    }
    const LoginFail = () => {
        messageApi.open({
            type: 'warning',
            content: 'Tài khoản hoặc mật khẩu không chính xác !'
        })
    }
    const Regfail = () => {
        messageApi.open({
            type: 'warning',
            content: 'Email đã tồn tại , vui lòng chọn email khác !'
        })
    }
    // dùng login từ context
    const {SetLogInState } = useAuth();

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
                console.log(data)
                if(data.status === 200)
                {
                    wellcome(username);
                    setCookie('token' , data.token);
                    setCookie('role' , data.role);
                    setCookie('username' , data.username);
                    localStorage.setItem('token' , data.token)
                    localStorage.setItem('role' , data.role)
                    SetLogInState(username , data.role)
                    setTimeout(()=>{
                        if(data.role === "admin"){
                            navigate("/admin/dashboard")
                        }
                        else 
                        {
                            navigate("/")
                        }
                       
                    },2500)      
                }
                else{
                    LoginFail();
                }
            }
            else {
           
            }
        } catch (error) {
            console.error("Login failed : " , error);
            LoginFail();
        }
       
    }
    const onRegis = async (value)=>{
            const { username , email , password} = value;
            try {
                const res = await fetch('http://localhost:8080/BE_PRINTER/api/v1/user/signup',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password , email})
                })

                if(res.ok){
                    const data = await res.json();
                    console.log(data);
                     if(data.status === 201){
                        wellcomereg(username);
                        setIsLogin(true);
                        setTimeout(()=>{
                            navigate("/login")
                        },2500) 
                     }
                  
                }
            } catch (error) {
                console.error("Login failed : " , error);
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
            {isLogin ? (<>
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
                        <p>If you don't have account    <a
                                    href="/register"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsLogin(false);
                                    }}
                                >Register</a> </p>
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
                    onFinish={onRegis}
                    
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
                        <p>If you have account <a
                                    href="/login"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsLogin(true);
                                    }}
                                >Sign In</a> </p>
                    </Form.Item>
                </Form>
            </>)}




        </>


    )
}
export default Login