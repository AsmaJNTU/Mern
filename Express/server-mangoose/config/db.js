const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://asma:DZq6HjwENJwX9e@cluster0.bkkka.mongodb.net/')

const connection=mongoose.connection;

connection.on('connected',()=>(console.log("DBconnected")))
connection.on('error',()=>(console.log("DB error")))