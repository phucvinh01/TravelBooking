import React, { useState } from 'react'
import Modal from 'antd/es/modal/Modal'
import instance from '../Api/Instance'
import { Toast, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const ModalDelete = (props) => {
    const navigate = useNavigate()
    const { handleClose, show, state, getAllTours } = props
    const handleSubmit = async () => {
        let res = await instance.delete('/tours/' + state._id)
        console.log(res);
        if (res.success) {
            toast.success("Deleled..... ", state.title)
            setTimeout(() => {
                navigate(0)
            }, 1000)
        }
        else {
            toast.error("Cant delete......")
        }
        handleClose()
    }

    return (
        <div> <Modal
            title="Delete"
            open={show}
            closeIcon={false}
            onCancel={handleClose}
            onOk={handleSubmit}
        >
            <h4 className='text-muted'>
                Are you sure to delete this item?
            </h4>
            <h3 className='fw-bolder'>{state.title}</h3>
        </Modal>
        </div>
    )
}

export default ModalDelete