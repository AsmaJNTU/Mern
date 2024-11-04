const mongoose=require('mongoose')


const UsersSchema= new mongoose.Schema({
    user:{
        type:String,
        required:true
     },
     productid :{
        type:Number,
        required:true,
        // unique:true
     },
     ordrerprice:{
        type:Number,
        required:true,
        // unique :true
     },
    shppingadd:{
        type :String,
        required :true
    },
    ordrerdate:{
        type :String,
        required:true
    }



})
const Users =mongoose.model("Users",UsersSchema)

module.exports=mongoose