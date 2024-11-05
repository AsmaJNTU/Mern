const mongoose=require('mongoose')


const OrderSchema= new mongoose.Schema({
    user:{
        type:String,
        required:true
     },
     productid :{
        type:Number,
        required:true,
        // unique:true
     },
     orderprice:{
        type:Number,
        required:true,
        // unique :true
     },
    shppingadd:{
        type :String,
        required :true
    },
    orderdate:{
        type :String,
        required:true
    }



})
const Orders =mongoose.model("Orders",OrderSchema)

module.exports=Orders