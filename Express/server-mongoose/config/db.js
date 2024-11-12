const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://asma:kRs_7wyDPuK7a69@cluster0.bkkka.mongodb.net/MaxStore?retryWrites=true&w=majority&appName=Cluster0")


const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')