import axio from "./Instance"

const fetchAllTours = (page) => {
    return axio.get("/tours?page=" + page)
}

const fetchOneTour = (id) => {
    return axio.get(id)
}

const postReview = (props) => {

    return axio.post("/review/" + props.productId, { ...props }, {
    })
}

const createTour = (props) => {
    console.log(props);
    return axio.post("/tours/", { ...props }, {
    })
}


export { fetchAllTours, fetchOneTour, postReview, createTour }