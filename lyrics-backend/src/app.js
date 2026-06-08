const express=require('express')
const cookieparser=require('cookie-parser')
const app=express()
app.use(express.json())
app.use(cookieparser())



// required routes
const SongRouter=require('./routes/songRoutes')
const AuthRouter=require('./routes/authRoutes')

//use routes
app.use("/api",SongRouter)
app.use("/api",AuthRouter)


module.exports=app