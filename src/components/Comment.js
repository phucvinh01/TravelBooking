import React from 'react'

const Comment = (props) => {
    const { username, reviewText, rating } = props
    return (
        <>
            <div className='container my-3'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2'>
                        <img
                            style={{ width: "60px" }}
                            src='https://i.pinimg.com/236x/88/08/b8/8808b840ef5f755396e2b8f465e3d4bf.jpg'
                            alt='img-user'></img>
                        <div>
                            <p className='fw-bolder  mb-0'>{username}</p>
                            <p className='text-muted mb-0'>{reviewText}</p>
                        </div>
                    </div>
                    <div className=''>
                        <i className="fa-solid fa-star mx-2"></i>
                        <small className='fs-6 text-muted'>{rating}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment