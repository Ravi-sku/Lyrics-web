const mongoose = require('mongoose')
const Admin = require('../models/authModel')
const bcrypt = require('bcryptjs')
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL)
// console.log(process.env.MONGO_URL);


async function AdminPannel() {

    try{

        const hashpassword = await bcrypt.hash(process.env.ADMIN_PASSWORD,10)

        await Admin.create({
            name:process.env.ADMIN_NAME,
            email:process.env.ADMIN_EMAIL,
            password:hashpassword

        })

        console.log("admin created")
        process.exit()

    }

    catch(err){

        console.log(err.message)
        process.exit()

    }

}

AdminPannel()