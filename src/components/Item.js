import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12 p-1 '>
                <Card className='item-card shadow-lg'>
                    <div className='item-card-img'>
                        <img className='img-fluid' src="https://i.pinimg.com/564x/83/20/9f/83209f714a8fa0b35354b1bcad6388cf.jpg" alt='...'></img>
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
                                <small className='p-0 mt-2 text-muted fs-7'>Not rated</small>
                            </div>
                        </div>
                        <div className='item-card-title'>
                            <h5 className=''><Link to={"/tours/" + props._id} >{props.title}</Link></h5>
                        </div>
                        <div className='d-flex align-item-center justify-content-between mt-3'>
                            <p className='fs-6 fw-bolder mt-2 text-muted'><span style={{ color: "#ff7e01" }}>${props.price}</span> /per person</p>
                            <Link to={"/tours/" + props._id} className='btn-book-effect'><button className='btn btn-book'>Book now</button></Link>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Item