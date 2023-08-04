import React from 'react'
import Comment from './Comment'


const ListComment = ({ data }) => {
    return (
        data && data.length > 0 && data.map((item, index) => {
            return (
                <Comment
                    key={index}
                    username={item.username}
                    reviewText={item.reviewText}
                    rating={item.rating}
                />
            )

        })
    )
}


export default ListComment