const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://asma:343477@in-aws.tqrk4.mongodb.net/max-store?retryWrites=true&w=majority&appName=in-AWS')

const connection=mongoose.connection;

connection.on('connected',()=>(console.log("DBconnected")))
connection.on('error',()=>(console.log("DB error")))

module.exports=mongoose