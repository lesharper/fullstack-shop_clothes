const Router = require("express");
const db = require("../db");
const bcrypt = require("bcrypt");
const router = new Router();

router.post("/registration", async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashPassword = bcrypt.hashSync(password, 2);
        await db.query(
            `INSERT INTO users (email,password) values ($1,$2)`,
            [email, hashPassword]
        );
        res.status(200).json({ message: "Успех! Аккаунт создан" });
    } catch (err) {
        console.log(err);
        res.json({
            message: "Неудача! Пользователь уже существует",
        });
    }
});

router.get("/login", async (req, res) => {
    if (req.session.user) {
        res.json({ isAuth: true, user: req.session.user });
    } else {
        res.json({ isAuth: false });
    }
});

router.get("/logout", async (req, res) => {
    if (req.session.user) {
        res.clearCookie("user");
        res.status(200).json({ isAuth: false });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        if (bcrypt.compareSync(password, user.rows[0].password)) {
            req.session.user = user.rows[0];
            res.json({ message: "Успех!" });
        } else res.json({ message: "Неудача! Аккаунта не существует." });
    } catch (err) {
        res.json({ message: "Неккоректные данные" });
        console.log(err);
    }
});

router.post("/add_money", async(req,res) => {
    try {
        const idUser = req.session.user.id;
        const {balance} = req.body

        await db.query("UPDATE users SET balance = users.balance + $1 WHERE id = $2", [balance, idUser])
    } catch  (error){

    }
})

router.post("/buy", async(req,res) => {
    try {
        const idUser = req.session.user.id;
        const {price} = req.body

        await db.query("UPDATE users SET balance = users.balance - $1 WHERE id = $2", [price, idUser])
    } catch  (error){

    }
})

router.get("/money", async(req,res) => {
    try {
        const idUser = req.session.user.id;

        const balance = await db.query("SELECT balance FROM users WHERE id = $1", [ idUser])
        res.json(balance.rows[0])
    } catch  (error){

    }
})

module.exports = router;