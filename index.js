const express = require("express");
const cors = require("cors");

const app = express();

app.post("/user",(req,res)=>{
    res.send("Hello user")
})
app.post("login",(req,res)=>{
    r
    es.send("Thank you for trying to login");
})
app.get("/",(req,res)=>{
    res.send("hello to all")
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})