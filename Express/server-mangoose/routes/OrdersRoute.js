const express=require('express')
const router=express.Router()
const Orders=require('../models/OrdersSchema')

router.get('/all',async(req,res)=>{
    try{
        const Order=await Orders.find()
        res.status(200).json(Order)
    }catch(error){
        res.status(500).json({message:error})
    }
})

router.post('/add', async (req, res) => {
    try {
        const OrderData = new Orders(req.body)
        const { user, productid, orderprice,shppingadd,orderdate } = OrderData
        if (!user || !productid || !orderprice || !shppingadd ||!orderdate) {
            res.status(401).json({ message: "all fiels required" })
        }
        const storedata = await OrderData.save()
        res.status(200).json(storedata)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put("/edit/:id",async(req,res)=>{
    try{
  const id=req.params.id
  const existingproduct=await Orders.findOne({_id:id})
  if(!existingproduct){
    res.status(404).json({message:"Product not found!"})
  }
  const updateproduct=await Orders.findByIdAndUpdate(id,req.body,{new:true})
  res.status(200).json(updateproduct)
    }
    catch(error){
      res.status(500).json({ message: error.message });
    }
  })
  router.delete('/delete/:id',async(req,res)=>{
    try{
      const id=req.params.id
      const existingproduct=await Orders.findOne({_id:id})
      if(!existingproduct){
        res.status(404).json({message:"Product not found!"})
      }
      const deleteproduct =await Orders.findByIdAndDelete(id,req.body,{new:true})
      res.status(200).json({message:"Product deleted"})
        }
        catch(error){
          res.status(500).json({ message: error.message });
        }
      })
module.exports = router