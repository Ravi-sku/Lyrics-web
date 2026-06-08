const express=require('express')
const  AuthRouter=express.Router()
// const controller=require('../controller/Auth.controller')
// AuthRouter.post("/loginadmin",controller.login)
const {login}=require('../controller/Auth.controller')
AuthRouter.post("/loginadmin",login)



module.exports=AuthRouter