import React, { useState } from 'react'
import { Row, Col, Form, Input, Space, Button } from 'antd'
import { Link } from 'react-router-dom'
import { register } from '../Api/Auth'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingAPI, setloadingAPI] = useState(false)
    let navigate = useNavigate();


    const handleRegiser = async () => {
        if (!email || !password || !username) {
            toast.error('Missing information');
            return;
        }
        setloadingAPI(true)
        let res = await register(email, password, username)
        if (res && res.success) {
            toast.success('Successfully registered')
            navigate('/login')
            console.log("check >>> ", res.success);

        }
        else {
            if (res && res.status === 404) {
                toast.error(res.data.message)
                console.log("log error: " + res.data.message);
            }
        }
        console.log(res);
        setloadingAPI(false)
    }




    return (
        <>
            <section style={{ marginBottom: "100px" }}>
                <div className='container'>
                    <Row justify={'center'} >
                        <Col lg={16} md={24} sm={24} className='shadow-lg'>
                            <Row>
                                <Col
                                    style={{ padding: "10px" }}
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
                                        <h2 className='text-center'>Register</h2>
                                    </div>
                                    <Form
                                        name="login"
                                        className='form-box'
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Username!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Username'
                                                className='login-form-input'
                                                bordered={false}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Email!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Email'
                                                className='login-form-input'
                                                bordered={false}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
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
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Item>

                                        <Form.Item className='m-0'
                                        >
                                            <Button
                                                disabled={email && password && username || !loadingAPI ? false : true}
                                                block
                                                type="primary"
                                                htmlType="submit"
                                                className='login-form-submit'
                                                onClick={handleRegiser}
                                            >
                                                {!loadingAPI && "Regiser"}
                                                {loadingAPI && <i className="fa-solid fa-fan fa-spin"></i>}
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <div className='d-gird mx-auto'>
                                        <Space className='m-0'>
                                            <p className='mb-0'>Already have an account?</p>
                                            <Link>Create</Link>
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

export default Register