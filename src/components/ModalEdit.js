import React, { useState, useEffect } from 'react'
import { Modal, Form, InputNumber, Upload, Checkbox, Input } from 'antd'
import instance from '../Api/Instance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Uploads from './Uploads';

const ModalEdit = (props) => {
    const { handleClose, show, state } = props

    const [id, setId] = useState(0)
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [distance, setDistance] = useState(0)
    const [price, setPrice] = useState(0)
    const [maxGroupSize, setMaxGroupSize] = useState(0)
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [featured, setFeatured] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        console.log("check state >>>>>>>>", id, title, city, address, distance, price, maxGroupSize, photo, description, featured);
        let res = await instance.put('/tours/' + id, { title, city, address, distance, price, maxGroupSize, description, featured })
        if (res.success) {
            toast.success("Update sucessful!")

            setTimeout(() => {
                navigate(0)
            }, 1000)
        }
        else {
            toast.error("update fail.....")
        }
        handleClose()
    }


    useEffect(() => {
        if (show) {
            setId(state._id)
            setTitle(state.title);
            setCity(state.city);
            setAddress(state.address)
            setDistance(state.distance)
            setPrice(state.price)
            setMaxGroupSize(state.maxGroupSize)
            setPhoto(state.photo)
            setDescription(state.desc)
            setFeatured(state.featured)
        }
    }, [state])


    return (

        <Modal
            width={1000}
            open={show}
            closeIcon={false}
            onCancel={handleClose}
            onOk={handleSubmit}
        ><Form>
                <div className='row'>
                    <h3 className='text-center'>Edit Tour</h3>
                    <hr></hr>
                    <div className='col-3'>
                        <input type='hidden' value={id}></input>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bolder">Title</label>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="email" className="form-control" name='title' required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label fw-bolder">City</label>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                value={city}

                                type="text" className="form-control" name='city' required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label fw-bolder">Address</label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}

                                type="text" className="form-control" name='address' required></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="mb-3">
                            <label htmlFor="distance" className="form-label fw-bolder">Distance</label>
                            <input
                                onChange={(value) => setDistance(value)}
                                value={distance}

                                type="number" min={0} className="form-control" name='distance' required></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="price" className="form-label fw-bolder mx-2">Price</label>
                            <input
                                onChange={(value) => setPrice(value)}
                                value={price}
                                type='number'
                                class="form-control w-100" name='price' required></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="maxGroupSize" className="form-label fw-bolder mx-2">Size</label>
                            <input
                                onChange={(value) => setMaxGroupSize(value)}
                                value={maxGroupSize}
                                type='number'
                                className="form-control w-100" name='maxGroupSize' required></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label fw-bolder">Description</label>
                            <textarea
                                name='desc'
                                onChange={(e) => setDescription(e.target.value)}
                                style={{
                                    height: '150px',

                                }}
                                className='form-control'
                                value={description}
                            ></textarea>
                        </div>
                        <div className='mb-3'>
                            <Checkbox
                                checked={featured ? true : false}
                                onChange={() => setFeatured(!featured)} >Featured</Checkbox>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='mb-3'>
                            <Uploads img={photo} />
                        </div>


                    </div>
                </div>


            </Form>

        </Modal>
    )
}

export default ModalEdit