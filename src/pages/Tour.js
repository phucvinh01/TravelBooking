import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Row, Col, Space, Rate, Form, Input, Button, DatePicker, InputNumber } from 'antd';
import _ from 'lodash'
import { fetchOneTour } from '../Api/TourApi';
import ListComment from '../components/ListComment';

const Tour = () => {
    const [tourData, setTourData] = useState([])
    const [revews, setReviews] = useState([])

    let id = useLocation()
    // console.log(id.pathname);

    useEffect(() => {
        getOneTour(id.pathname)
    }, []
    )

    const getOneTour = async (id) => {
        let res = await fetchOneTour(id)
        console.log(">>>>>>>>", res);
        if (res && res.data) {
            setTourData(res.data)
            setReviews(res.data.reviews)
        }
    }
    const values = _.filter(revews, revews.productId);

    console.log(values);

    const serviceCharge = 10;

    const dataPrice = (tourData) => {
        return tourData && tourData.price
    }
    const [total, setTotal] = useState(serviceCharge);
    const onChange = (value) => setTotal(value * dataPrice(tourData) + serviceCharge)
    return (
        <>
            {
                tourData && (
                    <div className='container'>
                        <Row>
                            <Col lg={ 16 } md={ 16 } sm={ 24 } className='p-3'>
                                <div className='tour-img mb-3'>
                                    <img className='w-100 rounded-3' src="https://i.pinimg.com/564x/ea/3d/d4/ea3dd47276b865c44d253c028da19a06.jpg"></img>
                                </div>
                                <div className='tour-detail rounded-3 p-4 mb-3'>
                                    <h2 className='mb-4'>{ tourData.title }</h2>
                                    <div className='d-flex gap-5 mb-4'>
                                        <Space className='d-flex align-items-center gap-1 m-1'>
                                            <i className="fa-solid fa-star"></i>
                                            <small className='fs-6 text-muted'>(0)</small>
                                        </Space>
                                        <Space className='d-flex align-items-center gap-1 m-1'>
                                            <i className="fa-solid fa-location-dot"></i>
                                            <small className='fs-6 text-muted'>{ tourData.address }</small>
                                        </Space>
                                    </div>
                                    <div className='d-flex gap-5 mb-4 m-1 sm-tour-detail flex-sm-row'>
                                        <Space className='m-1'>
                                            <i className="fa-solid fa-location-dot"></i>
                                            <small className='fs-6 text-muted'>{ tourData.city }</small>
                                        </Space>
                                        <Space className='m-1'>
                                            <i className="fa-solid fa-coins"></i>
                                            <small className='fs-6 text-muted'><span>{ tourData.price }</span>/per person</small>
                                        </Space>
                                        <Space className='m-1'>
                                            <i className="fa-solid fa-location-dot"></i>
                                            <small className='fs-6 text-muted'>{ tourData.distance } /km</small>
                                        </Space>
                                        <Space className='m-1'>
                                            <i className="fa-solid fa-user-group"></i>
                                            <small className='fs-6 text-muted'>{ tourData.maxGroupSize } people</small>
                                        </Space>
                                    </div>H
                                    <div>
                                        <h5 className='mb-4'>Description</h5>
                                        <p className='text-muted'>{ tourData.desc }</p>
                                    </div>
                                </div>

                                <div className='tour-detail p-4 rounded-3'>
                                    <h2 className='mb-3'>
                                        Reviews ({ values.length } reviews)
                                    </h2>
                                    <Rate className='mb-3' allowHalf defaultValue={ 0 } />
                                    <Form className='tour-reviews d-flex p-3 rounded-4' name='commnent'>
                                        <Input bordered={ false } placeholder='share you think' name='comment' />
                                        <Button htmlType="submit" className='btn-tour-booking'>Submit</Button>
                                    </Form>
                                    <ListComment data={ values }></ListComment>
                                </div>

                            </Col>
                            <Col lg={ 8 } md={ 8 } sm={ 24 } className='p-3'>
                                <Form className='tour-form-booking p-4 rounded-3 ' name='booking'>
                                    <div className='d-flex justify-content-between border-bottom pb-3 mb-3'>
                                        <h4>
                                            <small >{ dataPrice(tourData) }<span className='text-muted fs-6'>/per person</span></small>
                                        </h4>
                                        <Space className='d-flex align-items-center gap-1'>
                                            <i className="fa-solid fa-star"></i>
                                            <small className='fs-6 text-muted'>(0)</small>
                                        </Space>
                                    </div>
                                    <div>
                                        <h4>Information
                                        </h4>
                                        <div className='form-booking-info p-3 rounded-3 mb-3'>
                                            <Form.Item
                                                name="name">
                                                <Input bordered={ false } placeholder='Full name' />
                                            </Form.Item>
                                            <Form.Item
                                                name="phone">
                                                <Input bordered={ false } placeholder='phone' />
                                            </Form.Item>
                                            <Space>
                                                <Form.Item
                                                    name="day">
                                                    <DatePicker bordered={ false } placeholder='dd/mm/yyyy' />
                                                </Form.Item>
                                                <Form.Item
                                                    name="group">
                                                    <InputNumber bordered={ false } min={ 1 } placeholder='Guest' onChange={ onChange } />
                                                </Form.Item>
                                            </Space>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between text-muted mb-2'>
                                        <small>${ dataPrice(tourData) } x 1 person</small>
                                        <small>${ dataPrice(tourData) }</small>
                                    </div>
                                    <div className='d-flex justify-content-between text-muted mb-2'>
                                        <small>Service charge</small>
                                        <small>${ serviceCharge }</small>
                                    </div>
                                    <div className='d-flex justify-content-between  mb-3'>
                                        <h5 >Total</h5>
                                        <h5 className='fs-5 '>${ total }</h5>
                                    </div>

                                    <Form.Item>
                                        <Button block className='btn-tour-booking'> Book Now</Button>
                                    </Form.Item>

                                </Form>
                            </Col>
                        </Row>
                    </div>
                )
            }
            <div className='container p-4'>
                <section style={ { marginBottom: "110px" } }>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-6'>
                            <h2>Subcribe DUONG now to get useful traveling information</h2>
                            <Form>
                                <Input.Search
                                    placeholder="Enter your email"
                                    allowClear
                                    enterButton="Subcribe "
                                    size="middle"
                                    bordered={ false }
                                    style={ { borderBottom: "1px solid #ff7e01", borderRadius: "10px" } }
                                />
                            </Form>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-6'>
                            <img src='https://doan-eta.vercel.app/static/media/male-tourist.f000d0ad1ca492b2bcfb.png' alt='sybbb..'></img>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
export default Tour