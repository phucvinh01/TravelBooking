import { Form } from 'antd'
import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

import _ from 'lodash'

const SearchBar = ({ data }) => {

    const { handleSearch, search } = useContext(UserContext);
    const navigate = useNavigate()

    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState('');
    const [people, setPeople] = useState("");
    const handleSubmit = () => {
        if (!location && !distance && people == 0) {
            toast.error('Missing infomation!!')
        }
        else {
            const fillter = _.filter(data, function (o) {
                return o.city == location || o.distance == distance || o.maxGroupSize == people;
            });
            if (!fillter) {
                toast.info("No matching results were found!!")
            }
            else {
                // console.log(fillter);
                handleSearch(fillter)
                navigate("/tours")
            }
        }

    }

    const handleDelete = () => {
        handleSearch(null)
    }

    return (
        <>
            <div className='container'>
                <Form className='d-flex align-item-center gap-3 search-bar p-3' >
                    <div className='d-flex gap-4 p-2 m-0'>
                        <span className='mt-2'><i className="fa-solid fa-location-dot  fs-4"></i></span>
                        <div className='input-field border-right'>
                            <h6>Location</h6>
                            <input
                                onChange={ (e) => setLocation(e.target.value) }
                                type='text'
                                name='location'
                                id='location'
                                placeholder='Where are you going?'>
                            </input>
                        </div>
                    </div>
                    <div className='d-flex gap-4 p-2 m-0'>
                        <span className='mt-2'><i className="fa-solid fa-compass fs-4"></i></span>
                        <div className='input-field  border-right'>
                            <h6>Distance</h6>
                            <input
                                onChange={ (e) => setDistance(e.target.value) }
                                type='number'
                                name='distance'
                                min={ 0 }
                                id='distance'
                                placeholder='Distance/km'>
                            </input>
                        </div>
                    </div>
                    <div className='d-flex gap-4 p-2 m-0'>
                        <span className='mt-2'><i className="fa-solid fa-user-group fs-4"></i></span>
                        <div className='input-field'>
                            <h6>Max People</h6>
                            <input
                                onChange={ (e) => setPeople(e.target.value) }
                                type='number'
                                name='people'
                                min={ 0 }
                                id='people'>
                            </input>
                        </div>
                    </div>
                    <button
                        className='btn search-bar-btn'
                        onClick={ handleSubmit }>
                        <i className="fa-solid fa-magnifying-glass fs-1 m-0"></i>
                    </button>
                    {
                        search && <button
                            className='btn search-bar-btn btn-outline-dark'
                            onClick={ handleDelete }>
                            <i className="fa-solid fa-x fs-1 m-0"></i>
                        </button>
                    }

                </Form>
            </div>
        </>
    )
}

export default SearchBar