import { Form } from 'antd'
import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div className='container'>
                <Form className='d-flex align-item-center gap-3 search-bar p-3' >
                    <div className='d-flex gap-4 p-2 m-0'>
                        <span className='mt-2'><i className="fa-solid fa-location-dot  fs-4"></i></span>
                        <div className='input-field border-right'>
                            <h6>Location</h6>
                            <input type='text' name='location' id='location' placeholder='Where are you going?'></input>
                        </div>
                    </div>
                    <div className='d-flex gap-4 p-2 m-0'>
                        <span className='mt-2'><i className="fa-solid fa-compass fs-4"></i></span>
                        <div className='input-field  border-right'>
                            <h6>Distance</h6>
                            <input type='number' name='distance' id='distance' placeholder='Distance/km'></input>
                        </div>
                    </div>
                    <div className='d-flex gap-4 p-2 m-0'>
                        <span className='mt-2'><i className="fa-solid fa-user-group fs-4"></i></span>
                        <div className='input-field'>
                            <h6>Max People</h6>
                            <input type='number' name='people' id='people' placeholder='Location'></input>
                        </div>
                    </div>
                    <button className='btn search-bar-btn'><i className="fa-solid fa-magnifying-glass fs-1 m-0"></i></button>
                </Form>
            </div>
        </>
    )
}

export default SearchBar