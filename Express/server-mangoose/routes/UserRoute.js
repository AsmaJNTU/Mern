const express = require('express')

const router = express.Router()
const Users = require('../models/user')

router.get('/all', async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const UserData = new Users(req.body)
        const { name, email, phone,password } = UserData
        if (!name || !email || !phone || !password) {
            res.status(401).json({ message: "all fiels required" })
        }
        const storedata = await UserData.save()
        res.status(200).json(storedata)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.put("/edit/:id",async(req,res)=>{
    try{
  const id=req.params.id
  const existingproduct=await Users.findOne({_id:id})
  if(!existingproduct){
    res.status(404).json({message:"Product not found!"})
  }
  const updateproduct=await Users.findByIdAndUpdate(id,req.body,{new:true})
  res.status(200).json(updateproduct)
    }
    catch(error){
      res.status(500).json({ message: error.message });
    }
  })
  router.delete('/delete/:id',async(req,res)=>{
    try{
      const id=req.params.id
      const existingproduct=await Users.findOne({_id:id})
      if(!existingproduct){
        res.status(404).json({message:"Product not found!"})
      }
      const deleteproduct =await Users.findByIdAndDelete(id,req.body,{new:true})
      res.status(200).json({message:"Product deleted"})
        }
        catch(error){
          res.status(500).json({ message: error.message });
        }
      })
module.exports = router










