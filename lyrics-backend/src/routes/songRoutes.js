const express=require('express')
const Songrouter=express.Router()
const controller=require('../controller/Song.controller')
const identifyer=require('../middleware/middleware')



Songrouter.post("/addsong",identifyer,controller.AddSong)
Songrouter.get("/getAllsong",controller.getAllsong)
Songrouter.get("/getsong/:slug",controller.getsong)
Songrouter.get("/search",controller.searchSong)
Songrouter.put("/updatesong/:id",identifyer,controller.UpdateSong)
Songrouter.delete("/deletesong/:id",identifyer,controller.DeleteSong)
module.exports=Songrouter