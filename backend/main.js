const config = require("./config.json")
const cors = require("cors")

const userRouter = require("./routes/user.routes")
const shopRouter = require("./routes/shop.routes")
const likedRouter = require("./routes/liked.routes")
const basketRouter = require("./routes/basket.routes")

const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser(config.secret))

app.use(
    session({
        key: "user",
        secret: config.secret,
        resave: false,
        saveUninitialized: false,
        domain: "http://localhost",
        path: "/",
        cookie: { maxAge: 86500000, httpOnly: true },
    })
);


app.use("/api", userRouter);
app.use("/api", shopRouter);
app.use("/api", basketRouter);
app.use("/api", likedRouter);


app.listen(config.port, () => {
    console.log("SERVER HAS BEEN STARTED IN PORT - ", config.port)
})