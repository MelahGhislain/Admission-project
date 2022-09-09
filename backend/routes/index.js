const router = require('express').Router()
const studentRoutes = require('./student.route')

module.exports = ()=>{

    router.get('/', (req, res)=>{
        res.status(200).send("Admission api working")
    })

    router.use("/student", studentRoutes())
    return router
}