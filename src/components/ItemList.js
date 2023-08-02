import React from 'react'
import Item from './Item'

const ItemList = ({ toursData }) => {
    return (
        <>
            <div className='row justify-content-center'>
                {
                    toursData && toursData.length > 0 && toursData.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                city={item.city}
                                title={item.title}
                                _id={item._id}
                                photo={item.photo}
                                featured={item.featured}
                                price={item.price}
                            ></Item>

                        )

                    })
                }
            </div>


        </>
    )
}

export default ItemList