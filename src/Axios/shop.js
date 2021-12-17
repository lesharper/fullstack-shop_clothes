import axios from "axios"

export const add_product = async (title, description, category, family, promo, price, setAnswer) => {
    try {
        await axios.post("/api/add_product", {
            title,
            description,
            category,
            family,
            promo,
            price
        }).then(res => {
            const {message} = res.data
            setAnswer(message)
        })
    } catch (error) {
        console.log(error)
    }
}

export const all_products = async (setAllProducts) => {
    try {
        await axios.get("/api/products").then(res => {
            setAllProducts(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const mans_products = async (setMansProducts) => {
    try {
        await axios.get("/api/mans").then(res => {
            setMansProducts(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const womans_products = async (setWomensProducts) => {
    try {
        await axios.get("/api/womans").then(res => {
            setWomensProducts(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}


export const delete_product = async (id) => {
    try {
        await axios.post("/api/delete_product", {id}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}

export const single_products = async (id, setSingle) => {
    try {
        await axios.post("/api/single", {id}).then(res => {
            setSingle(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}


