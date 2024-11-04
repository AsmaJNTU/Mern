const express=require('express')
const router=express.Router()
const Users=require('../models/user')

router.get('/all',async(req,res)=>{
    try{
        const user=await Users.find()
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message:error})
    }
})