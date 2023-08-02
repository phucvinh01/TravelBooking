import React from 'react'
import { Card, Avatar } from 'antd'

const CardComment = (props) => {
    return (
        <>
            <Card size='small' style={{ width: "21rem" }} bordered={false}>
                <div className='card-title text-muted fs-6' style={{ fontWeight: "normal", textAlign: "justify" }}>
                    {/* <p>  {props.cmt}</p> */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium rerum, neque esse officia eius cupiditate fuga hic maxime tempore id cum molestiae placeat, natus laudantium quisquam iure pariatur illum?
                    <p></p>
                </div>
                <div className='card-body'>
                    <div className='d-flex'>
                        <Avatar size={60} shape='square' src='https://doan-eta.vercel.app/static/media/ava-1.c185d7723fe40ec46830.jpg'></Avatar>
                        <div className='px-4 mt-2'>
                            <strong>{props.name}</strong>
                            <p>{props.role}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardComment