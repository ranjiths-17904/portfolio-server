const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://ranjiths-17904:Ranjith-2004@region-in-aws.0aj05.mongodb.net/?retryWrites=true&w=majority&appName=Region-IN-AWS")
const connection = mongoose.connection;
connection.on('connected', ()=> {
    console.log("DB Connected")
})

connection.on('error', ()=> console.log("DB ERROR"))

module.exports = mongoose