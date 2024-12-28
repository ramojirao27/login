const express = require("express");
const cors = require("cors");

const app = express();

app.post("/user",(req,res)=>{
    res.send("Hello user")
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})