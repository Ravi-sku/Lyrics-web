require("dotenv").config();
const ConnectTODB=require("./src/config/db")
const app=require("./src/app")

ConnectTODB();

app.listen(3000,()=>{
    console.log("server start")
})
