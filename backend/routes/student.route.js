const router = require('express').Router()
const studentController = require('../controllers/student.controller')

module.exports = ()=>{

    router.post('/create', studentController.createStudent)
    
    // Admin use
    
    router.patch('/update/:id', studentController.updateStudent)
    router.get('/:id', studentController.getStudent)
    router.get('/', studentController.getStudents)

    router.delete('/:id', studentController.deleteStudent)

    return router
}