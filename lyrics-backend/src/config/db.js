const express=require('express')
const mongoose=require("mongoose")

// const dns=require('dns')
// dns.setServers([
//     '1.1.1.1',
//     '8.8.8.8'
// ])

function ConnectTODB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("DB connected");
    })
    .catch((err)=>{console.log(err);
    })
}

module.exports=ConnectTODB