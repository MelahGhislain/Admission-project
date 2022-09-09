require("dotenv").config()
const mongoose = require('mongoose')

const port  = process.env.PORT
const MONGOURI = process.env.MONGOURI
module.exports = (app)=>{
    mongoose.connect(MONGOURI, 
        {
            // useUrlParser: true,
            useUnifiedTopology: true
        },
        (err)=>{
        if(err) return console.log("Connection failed => ", err)

        console.log("DB Connected")
        app.listen(port, ()=>console.log(`Server running on port ${port}`))
    })
}

