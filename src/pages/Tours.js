import { Form, Input } from 'antd'
import React, { useEffect, useState, useContext } from 'react'
import { fetchAllTours } from '../Api/TourApi'
import { UserContext } from '../Context/UserContext';
import ItemList from "../components/ItemList";
import SearchBar from '../components/SearchBar';
import ModalAddNew from '../components/ModalAddNew';
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Tours = () => {


    const [listTourData, setListTourData] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const { search, user } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleInsert = (tour) => {
        setListTourData([tour, ...listTourData])
    }

    const handlePageClick = (event) => {
        getAllTours(+event.selected)

    }


    useEffect(() => {
        getAllTours(0)
    }, [])

    const getAllTours = async (page) => {
        let res = await fetchAllTours(page)
        // console.log(">>>>>>>>", res);
        if (res && res.data) {
            setListTourData(res.data)
            setTotalPages(3)
        }
    }
    return (
        <>
            <div className='tour-common text-center position-relative'>

                {
                    user && user.role != "admin" ? <h1>All Tour</h1> : <h1>Admin Page</h1>
                }
            </div>
            <div className='container'>
                <section>
                    <SearchBar data={listTourData} ></SearchBar>
                </section>

                <section style={{ marginBottom: "110px" }}>
                    {
                        user && user.role == "admin" &&
                        <>
                            <div className='d-flex justify-content-end my-3'>
                                <button
                                    className='btn btn-book'
                                    onClick={handleShow}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </>
                    }
                    <ItemList toursData={search && search ? search : listTourData} getAllTours={getAllTours}></ItemList>

                    <ReactPaginate
                        nextLabel={<FaAngleRight />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        previousLabel={<FaAngleLeft />}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </section>

                {
                    user && user.role != "admin" &&
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
                }

            </div>
            <ModalAddNew
                show={show}
                handleClose={handleClose}
                handleInsert={handleInsert}

            />




        </>
    )
}

export default Tours