import React, { useState } from 'react'
import Item from './Item'
import ModalEdit from '../components/ModalEdit';
import ModalDelete from './ModalDelete';

const ItemList = ({ toursData, getAllTours }) => {

    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const [state, setState] = useState({});
    const handleClose = () => {
        setShow(false)
        setShowDelete(false)
    };
    const handleState = (item) => {
        setState(item)
        setShow(true)
    }
    const handleStateDelete = (item) => {
        setState(item)
        setShowDelete(true)
    }
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    {
                        toursData && toursData.length > 0 && toursData.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    {...item}
                                    //handleShow={handleShow}
                                    handleState={handleState}
                                    handleStateDelete={handleStateDelete}
                                ></Item>

                            )

                        })
                    }
                </div>
            </div>


            <ModalEdit
                getAllTours={getAllTours}
                show={show}
                handleClose={handleClose}
                state={state}
            ></ModalEdit>
            <ModalDelete
                getAllTours={getAllTours}
                show={showDelete}
                handleClose={handleClose}
                state={state}
            >

            </ModalDelete>
        </>
    )
}

export default ItemList