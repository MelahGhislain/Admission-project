const router = require('express').Router()
const studentRoutes = require('./student.route')

module.exports = ()=>{

    router.use("/student", studentRoutes())

    return router
}