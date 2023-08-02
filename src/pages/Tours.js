import { Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { fetchAllTours } from '../Api/TourApi'

import ItemList from "../components/ItemList";
import SearchBar from '../components/SearchBar';
const Tours = () => {

    const [listTourData, setListTourData] = useState([])

    useEffect(() => {
        getAllTours()
    }, [])

    const getAllTours = async () => {
        let res = await fetchAllTours()
        console.log(">>>>>>>>", res);
        if (res && res.data) {
            setListTourData(res.data)
        }
        console.log(listTourData);
    }
    return (
        <>
            <div className='tour-common text-center position-relative'>
                <h1>All Tour</h1>
            </div>
            <div className='container'>
                <section>
                    <SearchBar></SearchBar>
                </section>
                <section>

                    <ItemList toursData={listTourData}></ItemList>

                </section>
                <section style={{ marginBottom: "110px" }}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-6'>
                            <h2>Subcribe DUONG now to get useful traveling information</h2>
                            <Form>
                                <Input.Search
                                    placeholder="Enter your email"
                                    allowClear
                                    enterButton="Subcribe "
                                    size="middle"
                                    bordered={false}
                                    style={{ borderBottom: "1px solid #ff7e01", borderRadius: "10px" }}
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

export default Tours