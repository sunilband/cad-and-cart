const express=require('express')
require('dotenv').config()
const server=express()
const path = require('path');
const cors=require("cors")
const port=process.env.PORT || 8000

// middlewares
server.use(cors())
server.use(express.json())
// read data 
const fs=require("fs")
const data=fs.readFileSync(path.resolve(__dirname,"./data.json"),"utf-8")

// dummy id password verification
server.post('/api/login/',(req,res)=>{
    console.log("post req recieved")
    if(req.body.username=="flutter_api_test" && req.body.password=="Api@test"){
        res.json({
            "token": "bb9a558e54bb5f70854e21b6119b3eea9523108f"
            })
    }
    else{
        res.json({
            "non_field_errors": [
              "Unable to log in with provided credentials."
            ]
          })
    }
    
})
// dummy token verification and data send
server.get("/api/movement_list_all/",(req,res)=>{
    console.log("get req recieved")
    const token=(req.headers.authorization).split("Token ")[1]
    if(token=="bb9a558e54bb5f70854e21b6119b3eea9523108f")
    res.send(data)
    else
    res.json({
        "detail": "Authentication credentials were not provided."
      })
})

server.listen(port,()=>{
    console.log('Server is running...')
})
