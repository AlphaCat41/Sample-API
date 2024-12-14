const express = require('express')
const router = express.Router()
const mysql = require('mysql2/promise')

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}

const dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_db"
})

router.use(timeLog)

router.get("/", async (req, res) => {
    const connection = await dbCon
    const [results, fields] = await connection.query("SELECT * FROM users")
    res.render("pages/index", {
        "users": results
    })
})
router.get("/:id", async (req, res) => {
    const connection = await dbCon
    const [results, fields] = await connection.query("SELECT * FROM users WHERE id = ?", [req.params.id])
    res.render("pages/index", {
        "users": results
    })
})
router.post("/delete", async (req, res) => {
    const connection = await dbCon
    await connection.query("DELETE FROM users WHERE id = ?", [req.body.id])
    res.send("Deleted id " + req.body.id + " successful")
})
router.post("/add", async (req, res) => {
    const connection = await dbCon
    console.log(req.body)
    await connection.query("INSERT INTO users (firstName, lastName, birthYear, email) VALUES (?)", [[req.body.firstName, req.body.lastName, req.body.birthYear, req.body.email]])
    res.send("Add user" + req.body.firstName + " successful")
})

module.exports = router