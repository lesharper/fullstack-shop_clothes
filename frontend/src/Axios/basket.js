import axios from "axios"

export const add_basket = async (id) => {
    try {
        await axios.post("/api/add_basket", {id}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}

export const get_basket = async (setBasket) => {
    try {
        await axios.get("/api/basket").then(res => {
            setBasket(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const get_count = async (setQuantity) => {
    try {
        await axios.get("/api/count").then(res => {
            setQuantity(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const get_sum = async (setResultPrice) => {
    try {
        await axios.get("/api/sum").then(res => {
            setResultPrice(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const delete_basket = async (id) => {
    try {
        await axios.post("/api/delete_basket", {id}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}
