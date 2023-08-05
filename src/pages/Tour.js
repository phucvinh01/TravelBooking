import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Row, Col, Space, Rate, Form, Input, Button, DatePicker, InputNumber } from 'antd';
import _ from 'lodash'
import { fetchOneTour } from '../Api/TourApi';
import ListComment from '../components/ListComment';
import { UserContext } from '../Context/UserContext';
import instance from '../Api/Instance';
import { toast } from 'react-toastify';


const Tour = () => {

    const navigate = useNavigate()

    const [state, setState] = useState([])
    const [tourData, setTourData] = useState([])
    const [revews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState(null)
    const [fullname, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [bookAt, setBookAt] = useState("")
    const [guestSize, setGuestSize] = useState(0)

    const handleBookAt = (date, dateString) => {
        setBookAt(dateString)
    };


    console.log(state);

    const { user, addCart } = useContext(UserContext);

    let id = useLocation()

    useEffect(() => {
        getOneTour(id.pathname)
    }, []
    )

    const getOneTour = async (id) => {
        let res = await fetchOneTour(id)
        if (res && res.data) {
            setTourData(res.data)
            setReviews(res.data.reviews)
        }
    }
    const values = _.filter(revews, revews.productId);

    const serviceCharge = 10;

    const dataPrice = (tourData) => {
        return tourData && tourData.price
    }
    const [total, setTotal] = useState(serviceCharge);
    const onChange = (value) => {
        setTotal(value * dataPrice(tourData) + serviceCharge)
        setGuestSize(value)
    }

    const handleSubmit = async () => {
        console.log(tourData._id);
        let res = await instance.post(`/review/${tourData._id}`, {
            productId: tourData.productId,
            username: user.name,
            reviewText: comment,
            rating: rating,
        });
        setComment("")
        setRating(0)
        getOneTour(id.pathname)
    }


    const handleBooking = async () => {

        if (!fullname || !phone || !bookAt || guestSize == 0) {
            toast.error("Missing information!!!")
        }
        else {
            console.log("checkkkk>>>>> ");
            console.log("TourName: ", tourData.title);
            console.log("Email: ", user.name);
            console.log("Id: ", user.id);
            console.log("Fullname: ", fullname);
            console.log("Phone: ", phone);
            console.log("BookAt: ", bookAt);
            console.log("GuestSize: ", guestSize);
            let res = await instance.post("/booking/", {
                userId: user.id,
                userEmail: user.name,
                tourName: tourData.title,
                fullName: fullname,
                guestSize: guestSize,
                phone: phone,
                bookAt: bookAt
            })
            if (res.success) {
                toast.success("Your tour is booked! Check your cart");
                setState(res.data)
                navigate('/')
                navigate(0);
            }
            else {
                if (res.status === 500) {
                    toast.error("Internal server error!");
                }
            }
        }


    }
    return (
        <>
            {
                tourData && (
                    <div className='container'>
                        <Row>
                            <Col lg={ 16 } md={ 16 } sm={ 24 } className='p-3'>
                                <div className='tour-img mb-3'>
                                    <img className='w-100 rounded-3'
                                        src="https://i.pinimg.com/564x/ea/3d/d4/ea3dd47276b865c44d253c028da19a06.jpg"></img>
                                </div>
                                <div className='tour-detail rounded-3 p-4 mb-3'>
                                    <h2 className='mb-4'>{ tourData.title }</h2>
                                    <div
                                        className='d-flex gap-5 mb-4'>
                                        <Space
                                            className='d-flex align-items-center gap-1 m-1'>
                                            <i className="fa-solid fa-star"></i>
                                            <small className='fs-6 text-muted'>(0)</small>
                                        </Space>
                                        <Space className='d-flex align-items-center gap-1 m-1'>
                                            <i className="fa-solid fa-location-dot"></i>
                                            <small className='fs-6 text-muted'>{ tourData.address }</small>
                                        </Space>
                                    </div>
                                    <div
                                        className='d-flex gap-5 mb-4 m-1 sm-tour-detail flex-sm-row'>
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
                                    </div>
                                    <div>
                                        <h5 className='mb-4'>Description</h5>
                                        <p className='text-muted'>{ tourData.desc }</p>
                                    </div>
                                </div>

                                <div className='tour-detail p-4 rounded-3'>
                                    <h2 className='mb-3'>
                                        Reviews ({ values.length } reviews)
                                    </h2>
                                    <Rate
                                        className='mb-3'
                                        allowHalf defaultValue={ 0 }
                                        onChange={ setRating } value={ rating } />
                                    <Form
                                        className='tour-reviews d-flex p-3 rounded-4'
                                        name='commnent'>
                                        <Input

                                            bordered={ false }
                                            disabled={ !user.auth ? true : false }
                                            placeholder={ !user.auth ? "You need login" : "Share you think" }
                                            name='comment'
                                            onChange={ (e) => setComment(e.target.value) } />
                                        <Button
                                            onClick={ handleSubmit }
                                            disabled={ !user.auth ? true : false }
                                            htmlType="submit"
                                            className='btn-tour-booking'>Submit</Button>
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
                                                <Input
                                                    bordered={ false }
                                                    placeholder='Full name'
                                                    onChange={ (e) => setFullname(e.target.value) } />
                                            </Form.Item>
                                            <Form.Item
                                                name="phone">
                                                <Input
                                                    bordered={ false }
                                                    placeholder='phone'
                                                    onChange={ (e) => setPhone(e.target.value) }
                                                />
                                            </Form.Item>
                                            <Space>
                                                <Form.Item
                                                    name="day">
                                                    <DatePicker
                                                        bordered={ false }
                                                        placeholder='dd/mm/yyyy'
                                                        onChange={ handleBookAt }
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    name="group">
                                                    <InputNumber
                                                        bordered={ false }
                                                        min={ 1 }
                                                        placeholder='Guest'
                                                        onChange={ onChange }

                                                    />
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
                                        <Button
                                            onClick={ handleBooking }
                                            block
                                            className='btn-tour-booking'
                                            disabled={ user.auth ? false : true }
                                        >
                                            { user.auth ? "Book Now" : "Sign in to book" }
                                        </Button>
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