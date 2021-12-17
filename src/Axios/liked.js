import axios from "axios"

export const add_liked = async (id) => {
    try {
        await axios.post("/api/add_liked", {id}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}

export const get_liked = async (setLikeProducts) => {
    try {
        await axios.get("/api/liked").then(res => {
            setLikeProducts(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const delete_like = async (id) => {
    try {
        await axios.post("/api/delete_like", {id}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}
