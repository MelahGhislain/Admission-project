const express = require('express')
const cors  = require("cors")
require('dotenv').config()
const connect = require('./db')
const routes = require('./routes')

const port  = process.env.PORT
const app  = express()

app.use(cors({origin: true}))
app.use(express.json())

app.use('/api/v1', routes())

connect(app)
// app.listen(port, ()=>console.log(`app running on port ${port}`))