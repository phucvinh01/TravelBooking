import axio from "./Instance"

const fetchAllTours = () => {
    return axio.get("/tours")
}

const fetchOneTour = (id) => {
    return axio.get(id)
}


export { fetchAllTours, fetchOneTour }