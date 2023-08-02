import axio from "./Instance"

const fetchAllTours = () => {
    return axio.get("/tours")
}

export { fetchAllTours }