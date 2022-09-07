const express = require('express')
const cors  = require("cors")
require('dotenv').config()
const connect = require('./db')
const { connection } = require('mongoose')

const port  = process.env.PORT
const app  = express()

app.use(cors({origin: true}))
app.use(express.json())


// connection(app)
app.listen(port, ()=>console.log(`app running on port ${port}`))