const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const axios = require("axios")
const users = require("./db/users")

const port = 3000

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public")) // to link public folder
app.use("/users", users)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})