const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    full_name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        index:true, 
        unique:true,
        sparse:true
    },
    cycle:{
        type: String,
        sparse:true
    },
    sex:{
        type: String,
        sparse:true
    },
    status:{
        type: String,
        sparse:true
    },
    dob:{
        type: String,
        sparse:true
    },
    place_of_birth:{
        type: String,
        sparse:true
    },
    phone:{
        type: String,
        sparse:true
    },

    // Parent Info
    father_name:{
        type: String,
        sparse:true
    },
    father_profession:{
        type: String,
        sparse:true
    },
    mother_name:{
        type: String,
        sparse:true
    },
    mother_profession:{
        type: String,
        sparse:true
    },
    adress:{
        type: String,
        sparse:true
    },

    // Education
    year:{
        type: String,
        sparse:true
    },
    place:{
        type: String,
        sparse:true
    },
    degree:{
        type: String,
        sparse:true
    },
    mention:{
        type: String,
        sparse:true
    },
    speciality:{
        type: String,
        sparse:true
    },
    average:{
        type: String,
        sparse:true
    },
    handicap:{
        type: String,
        sparse:true
    },
    language:{
        type: String,
        sparse:true
    },
    work:{
        type: String,
        sparse:true
    },
    
}, {timestamps: true})


module.exports = mongoose.model('student', studentSchema)