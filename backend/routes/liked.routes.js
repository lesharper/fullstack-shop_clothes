const Router = require("express");
const db = require("../db");
const router = new Router();


router.post("/add_liked", async(req, res) => {
    try {
        const {id} = req.body
        const idUser = req.session.user.id;

        await db.query("INSERT INTO liked (userId, productsId) VALUES ($1,$2)", [idUser, id])
    } catch (error) {
        res.json({message: "Неудача! Проверьте корректность данных"})
        console.log(error)
    }
})

router.get("/liked", async(req,res) => {
    try {
        const idUser = req.session.user.id;
        const liked = await db.query("SELECT products.id, products.title, products.price, products.promo FROM liked JOIN products ON products.id = liked.productsid WHERE userid = $1", [idUser])
        res.json(liked.rows)
    } catch  (error){

    }
})

router.post("/delete_like", async(req,res) => {
    try {
        const {id} = req.body
        await db.query("DELETE FROM liked WHERE productsid = $1", [id])
    } catch  (error){

    }
})

module.exports = router;