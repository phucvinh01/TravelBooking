import axio from "./Instance"

const login = (email, password) => {
    return axio.post("/auth/login", { email, password })
}

const register = (email, password, username) => {
    return axio.post("/auth/register", { email, password, username })
}


export { login, register }