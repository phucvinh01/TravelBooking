import React from 'react'
import { Row, Col, Form, Input, Space, Button, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <section style={{ marginBottom: "100px" }}>
                <div className='container'>
                    <Row justify={'center'} >
                        <Col lg={16} md={24} sm={24} className='shadow-lg'>
                            <Row>
                                <Col style={{ padding: "10px" }} md={12} lg={12} className='login-img'>
                                    <img className='w-100' src='https://doan-eta.vercel.app/static/media/login.0ef8aace597cf40e2588.png' alt='img_login'></img>
                                </Col>
                                <Col style={{ padding: "10px" }} sm={24} md={12} lg={12} className='login-from'>
                                    <div className='login-form-header'>
                                        <span><i class="fa-regular fa-user"></i></span>
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
                                            <Input placeholder='Username' className='login-form-input' bordered={false} />
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
                                            <Input placeholder='Email' className='login-form-input' bordered={false} />
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
                                            <Input.Password placeholder='Password' className='login-form-input' bordered={false} />
                                        </Form.Item>

                                        <Form.Item className='m-0'
                                        >
                                            <Button block type="primary" htmlType="submit" className='login-form-submit'>
                                                Login
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