const Router = require("express");
const db = require("../db");
const router = new Router();


router.post("/add_basket", async(req, res) => {
    try {
        const {id} = req.body
        const idUser = req.session.user.id;

        await db.query("INSERT INTO basket (userId, productsId) VALUES ($1,$2)", [idUser, id])
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.get("/basket", async(req,res) => {
    try {
        const idUser = req.session.user.id;
        const baskets = await db.query("SELECT products.id, products.title, products.price, products.promo FROM basket JOIN products ON products.id = basket.productsid WHERE userid = $1", [idUser])
        res.json(baskets.rows)
    } catch  (error){

    }
})

router.get("/count", async(req,res) => {
    try {
        const idUser = req.session.user.id;
        const baskets = await db.query("SELECT COUNT(userid) FROM basket WHERE userid = $1;", [idUser])
        res.json(baskets.rows[0])
    } catch  (error){

    }
})

router.get("/sum", async(req,res) => {
    try {
        const idUser = req.session.user.id;
        const sum = await db.query("SELECT SUM(products.price) FROM basket JOIN products ON products.id = basket.productsid WHERE userid = $1;", [idUser])
        res.json(sum.rows[0])
    } catch  (error){

    }
})

router.post("/delete_basket", async(req,res) => {
    try {
        const {id} = req.body
        await db.query("DELETE FROM basket WHERE productsid = $1", [id])
    } catch  (error){

    }
})



module.exports = router;