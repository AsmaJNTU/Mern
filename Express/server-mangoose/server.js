const express=require('express')
const app =express()
const port=3000
app.use(express.json())

const db=require('./config/db')
app.get('/',(req,res)=>restart.status(200).json({ message:"welcome"}))
app.listen(port,(()=>console.log(`Listening on  ${port}`)))