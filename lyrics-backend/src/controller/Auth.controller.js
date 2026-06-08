const authModel=require('../models/authModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')



async function login(req,res) {
          
    try{
    const {email,password}=req.body
    const admin=await authModel.findOne({email})
    if(!admin){
        return res.status(400).json({
            success:false,
            message:"Not a admin"
        })
    }

    const isMatch=await bcrypt.compare(password,admin.password)
    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid Password"
        })
    }

    const token=jwt.sign({
        id:admin._id,
        role:admin.role
    },process.env.JWT_SECRET,{expiresIn:'6d'})

    res.cookie("jwt_token",token)
    
    res.status(200).json({
        success:true,
        token
    })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

    
}

module.exports={login}