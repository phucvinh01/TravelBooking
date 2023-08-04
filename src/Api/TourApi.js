import axio from "./Instance"

const fetchAllTours = () => {
    return axio.get("/tours")
}

const fetchOneTour = (id) => {
    return axio.get(id)
}

const postReview = (props) => {

    return axio.post("/review/" + props.productId, { ...props }, {
    })
}


export { fetchAllTours, fetchOneTour, postReview }