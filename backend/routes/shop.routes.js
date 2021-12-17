const Router = require("express");
const db = require("../db");
const router = new Router();


router.post("/add_product", async(req, res) => {
    try {
        const {title, description, category, family, promo, price} = req.body
        await db.query("INSERT INTO products (title, description, category, family, promo, price) VALUES ($1,$2,$3,$4,$5,$6)",
            [title, description, category, family, promo, price])
        res.json({message: "Товар успешно создан"})
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.post("/single", async(req, res) => {
    try {
        const {id} = req.body
        const single = await db.query("SELECT * FROM products WHERE id = $1", [id])
        res.json(single.rows)
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.get("/mans", async(req, res) => {
    try {
        const products = await db.query("SELECT * FROM products WHERE category = 'мужчины'")
        res.json(products.rows)
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.get("/womans", async(req, res) => {
    try {
        const products = await db.query("SELECT * FROM products WHERE category = 'женщины'")
        res.json(products.rows)
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.get("/products", async(req, res) => {
    try {
        const products = await db.query("SELECT * FROM products")
        res.json(products.rows)
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.post("/delete_product", async (req, res) => {
    try {
        const {id} = req.body
        const products = await db.query("DELETE FROM products WHERE id = $1", [id])
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})


module.exports = router;