import React, { useState } from 'react'
import { Row, Col, Form, Input, Space, Button, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { login } from '../Api/Auth'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const Login = () => {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState();
    const [succses, setSuccses] = useState()
    const [loadingAPI, setloadingAPI] = useState(false);
    let navigate = useNavigate();



    const handleLogin = async () => {
        if (!email || !password) {
            toast.error('Missing information');
            return;
        }
        setloadingAPI(true)
        let res = await login(email, password)
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            navigate('/');
            console.log("check >>> ", res.token);

        }
        else {
            if (res && res.status === 404) {
                toast.error(res.data.message)
                console.log("log error: " + res.data.message);
            }
        }
        setloadingAPI(false)
    }


    console.log(user);
    console.log(succses);

    return (
        <>
            <section style={{ marginBottom: "100px" }}>
                <div className='container'>
                    <Row justify={'center'} >
                        <Col lg={16} md={24} sm={24} className='shadow-lg'>
                            <Row>
                                <Col style={{ padding: "10px" }}
                                    md={12} lg={12}
                                    className='login-img'>
                                    <img className='w-100'
                                        src='https://doan-eta.vercel.app/static/media/login.0ef8aace597cf40e2588.png' alt='img_login'></img>
                                </Col>
                                <Col
                                    style={{ padding: "10px" }}
                                    sm={24} md={12} lg={12}
                                    className='login-from'>
                                    <div className='login-form-header'>
                                        <span>
                                            <i className="fa-regular fa-user"></i>
                                        </span>
                                        <h2>Login</h2>
                                    </div>
                                    <Form
                                        name="login"
                                        className='form-box'

                                    >
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Email!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Email' className='login-form-input' bordered={false}
                                                onChange={e => setEmail(e.target.value)} />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                placeholder='Password'
                                                className='login-form-input'
                                                bordered={false}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </Form.Item>

                                        <Form.Item className='m-0'
                                        >
                                            <Button
                                                block
                                                type="primary"
                                                htmlType="submit"
                                                disabled={email && password || !loadingAPI ? false : true}
                                                onClick={handleLogin}
                                                className='login-form-submit'>
                                                {!loadingAPI && "Login"}
                                                {loadingAPI && <i className="fa-solid fa-fan fa-spin"></i>}
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <div className='d-gird mx-auto'>
                                        <Space className='m-0'>
                                            <p className='mb-0'>Don't have an account?</p>
                                            <Link to={"/login"}>Create</Link>
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Login