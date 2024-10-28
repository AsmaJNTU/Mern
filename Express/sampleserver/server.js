const express=require('express')


const Port=3000 
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
     res.status(200).json("hello")
})

app.listen(Port,()=>{
    // console.log("server is running in port"+Port)

    console.log(`server is running in port : ${Port}`)
})