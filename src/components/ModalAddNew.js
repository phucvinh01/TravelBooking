import React, { useState, useContext } from 'react'
import { Modal, Form, Checkbox } from 'antd'
import { toast } from 'react-toastify'
import instance from '../Api/Instance';
import { useNavigate } from 'react-router-dom';
import Uploads from './Uploads';
import { UserContext } from '../Context/UserContext';
import cloudinary from '../Api/uploadAPI';

const ModalAddNew = (props) => {
    const { upload } = useContext(UserContext);
    const { handleClose, show } = props
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [distance, setDistance] = useState(0)
    const [price, setPrice] = useState(0)
    const [maxGroupSize, setMaxGroupSize] = useState(0)
    const [description, setDescription] = useState("")
    const [featured, setFeatured] = useState(false)
    const [done, setDone] = useState(false)

    const handleSubmit = async (e) => {
        if (!title || !city || !address || !distance || !upload || !price || !maxGroupSize || !description) {
            toast.error('Missing information!!!')
            handleClose()
        }
        if (!done) {
            let res = await cloudinary(upload)
            console.log(res);
            if (res.statusText == "OK") {
                let result = await instance.post('/tours/', {
                    title: title,
                    city: city,
                    address: address,
                    distance: distance,
                    photo: res.data.secure_url,
                    price: price,
                    maxGroupSize: maxGroupSize,
                    desc: description,
                    reviews: [],
                    featured: featured
                });
                if (result.success) {
                    toast.success("Insert successful!");
                    setTimeout(() => {
                        navigate(0)
                    }, 1000)

                }
                else {
                    toast.error("Insert fail.....")
                }
            }
            else {
                toast.error('Missing information!!!')
            }
        }
        setDone(false)
        handleClose()
    }



    return (
        <Modal
            width={1000}
            open={show}
            onOk={handleSubmit}
            closeIcon={false}
            onCancel={handleClose}
            okButtonProps={{
                disabled: upload ? false : true,
            }}
        >
            <Form>
                <div className='row'>
                    <h3 className='text-center mb-3 text-info'>New Tours</h3>
                    <hr></hr>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="email" className="form-control" name='title' required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                type="text" className="form-control" name='city' required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                type="text" className="form-control" name='address' required></input>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="distance" className="form-label">Distance</label>
                            <input
                                onChange={(value) => setDistance(value)}
                                type="number" min={0} className="form-control" name='distance' required></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                onChange={(value) => setPrice(value)}
                                type="number" min={0}
                                class="form-control" name='price' required></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="maxGroupSize" className="form-label">Size</label>
                            <input
                                onChange={(value) => setMaxGroupSize(value)}
                                type="number" min={0}
                                className="form-control" name='maxGroupSize' required></input>
                        </div>

                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Description</label>
                            <textarea className='form-control' name='desc' style={{ height: "150px" }}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='mb-3'>
                            <Checkbox onChange={() => setFeatured(!featured)} >Featured</Checkbox>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className='mb-3'>
                            <Uploads />
                        </div>
                    </div>
                </div>
            </Form>
        </Modal>
    )
}

export default ModalAddNew