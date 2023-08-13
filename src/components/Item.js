import { useContext } from 'react';
import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import _ from 'lodash'

const Item = (props) => {
    const { user } = useContext(UserContext);
    const { handleState, handleStateDelete } = props

    const sumRating = _.sumBy(props.reviews && props.reviews, 'rating')
    const avg = _.round(sumRating / (props.reviews && props.reviews.length))

    console.log(props);
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12 p-1 ' style={{ width: "16rem" }}>
                <Card className='item-card shadow-lg'>
                    <div className='item-card-img'>
                        <img className='img-fluid' src={props.photo} alt='...'></img>
                        {props.featured && <span>Featured</span>}
                    </div>
                    <div className='item-card-body p-3'>
                        <div className='d-flex align-item-center justify-content-between'>
                            <div className='d-flex align-item-center gap-2'>
                                <i className="fa-solid fa-location-dot mt-2 fs-6"></i>
                                <p className='fw-bolder fs-5 p-0'>{props.city}</p>
                            </div>
                            <div className='d-flex align-item-center gap-1'>
                                <i className="fa-solid fa-star mt-2 fs-6"></i>
                                <small className='p-0 mt-2 text-muted fs-7'>{avg ? avg : 0}</small>
                            </div>
                        </div>
                        <div className='item-card-title'>
                            <strong className=''><Link to={"/tours/" + props._id} >{props.title}</Link></strong>
                        </div>

                        {
                            user && user.role == "admin" ?
                                <>
                                    <p className='fs-6 fw-bolder mt-2 text-muted'><span style={{ color: "#ff7e01" }}>${props.price}</span> /per person</p>
                                    <div className='d-flex align-item-center justify-content-between mt-3'>
                                        <button className='btn btn-edit btn-book-effect px-4 py-1' onClick={() => handleState(props)} ><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className='btn btn-book btn-book-effect px-4 py-1' onClick={() => handleStateDelete(props)}> <i className="fa-regular fa-trash-can"></i></button>
                                    </div>
                                </> :
                                <div className='d-flex align-item-center justify-content-between mt-3'>
                                    <small className='fw-bolder mt-2 text-muted'><span style={{ color: "#ff7e01" }}>${props.price}</span> /per person</small>
                                    <Link to={"/tours/" + props._id} className='btn-book-effect'><button className='btn btn-book'>Book now</button></Link>
                                </div>


                        }

                    </div>
                </Card>
            </div>
        </>
    )
}

export default Item