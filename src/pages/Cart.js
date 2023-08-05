import React, { useEffect, useContext, useState } from 'react'

import { Table } from 'antd';
const { Column } = Table;

const Cart = ({ dataSource }) => {


    const [state, setState] = useState([])

    useEffect(() => {
        setState(dataSource)
    }, [])

    return (
        <>
            <section>
                <div className='container mx-auto my-5'>
                    <Table dataSource={ dataSource }
                        pagination={ false }
                        className='shadow-2'
                    >
                        <Column title="Tour Name" dataIndex="tourName" key="tourName" />
                        <Column title="Book At" dataIndex="bookAt" key="bookAt" responsive={ ['lg'] } />
                        <Column title="Customer" dataIndex="fullName" key="fullName" responsive={ ['lg'] } />
                        <Column title="Phone Mumber" dataIndex="phone" key="phone" responsive={ ['lg'] } />
                        <Column title="Size" dataIndex="guestSize" key="guestSize" />
                        <Column
                            title="Action"
                            key="action"
                            render={ (_, record) => (
                                <button className='btn btn-outline-dark'>Check out</button>
                            ) }
                        />
                    </Table>
                </div>
            </section>

        </>
    )
}

export default Cart