const Student = require('../models/student.model')

 

module.exports.createStudent = async (req, res) => {
    
    try{
        const { first_name, last_name} = req.body
        const full_name =  `${first_name} ${last_name}`

        const student = await Student.create({full_name})
        res.status(201).json({success: true, data: student})
    }catch(err){
        res.status(500).json({success: false, err})
        console.log(err)
    }
}

module.exports.updateStudent = async (req, res) => {
    try{
        const id = req.params.id
        const data = req.body

        const student = await Student.findOneAndUpdate({_id : id}, {$set: data}, {new: true})
        
        res.status(200).json({success: true, data: student})
    }catch(err){
        console.log(err)
        res.status(500).json({success: false, err})
    }
}

// module.exports.signIn = async (req, res)=>{
//     const {email, password} = req.body
//     try{
//         const user = await User.findOne({email: email})
//         if(!user) throw new Error({msg: "This user does not exist"})
//         const correctPassword = await bcrypt.compare(password, user.password)
//         if(!correctPassword) throw new Error({msg: "Invalid password try again"})

//         const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, config.ACCESS_TOKEN_SECRETE, {expiresIn: "3h"})
//         const refreshToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, config.REFRESH_TOKEN_SECRETE, {expiresIn: "3d"})

//         await User.findOneAndUpdate({email: email}, {$set: {refreshToken}})

//         res.status(200).json({success: true, data:{accessToken, refreshToken}})

//     }catch(err){
//         next({msg: "Oops! something went wrong couldn't update user", err})
//     }
// }

// module.exports.updateRefreshToken = async(req, res)=>{
//     try{
//         const id = req.user.id
//         const refreshToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, config.REFRESH_TOKEN_SECRETE, {expiresIn: "3d"})
//         await User.findByIdAndUpdate(id, {$set: {refreshToken}})
//     }catch(err){
//         next({msg: "Oops! something went wrong couldn't update user", err})
//     }
// }

// module.exports.signOut = async (req, res)=>{
//     try{
//         const id = req.user.id
//         await User.findByIdAndUpdate(id, {$set: {refreshToken: ""}})
//     }catch(err){
//         next({msg: "Oops! something went wrong couldn't update user", err})
//     }
// }

// // Admin use

module.exports.getStudents = async (req, res)=>{
    try{
        const student = await Student.find({})
        res.status(200).json({success: true, data: student})
    }catch(err){
        console.log(err)
        res.status(500).json({success: false, err})
    }
}
module.exports.getStudent = async (req, res)=>{
    console.log("========== Is runnig ================")
    try{
        const id = req.params.id
        console.log(id)
        const student = await Student.findById(id)
        res.status(200).json({success: true, data: student})
    }catch(err){
        console.log(err)
        res.status(500).json({success: false, err})
    }
}

module.exports.deleteStudent = async (req, res)=>{
    try{
        const student = await Student.findOneAndRemove({_id: req.params.id})
        res.status(200).json({success: true, data: student})
    }catch(err){
        res.status(500).json({success: false, err})
    }
}
