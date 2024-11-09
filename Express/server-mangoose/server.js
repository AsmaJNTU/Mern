const express=require('express')
const app =express()
const port=3000
const db=require('./config/db')
app.use(express.json())

const Products=require('./routes/ProductRoute')
const Users=require('./routes/UserRoute')
const Orders=require('./routes/OrdersRoute')
const Auth = require('./routes/AuthRoute')
// const db=require('./config/db')
app.get('/',(req,res)=>restart.status(200).json({ message:"welcome"}))
// localhost:3000/products/all
app.use('/products',Products)
app.use('/users',Users)
app.use('/Order',Orders)
app.use('/auth', Auth)
app.listen(port,(()=>console.log(`Listening on  ${port}`)))