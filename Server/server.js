const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 7778

const dbConn = require('./config/db')



app.use(express.json()) //Middleware
app.get('/', (req, res) => {
    res.json({ message: "Welcome All"})
})

app.listen(port, () => {
    console.log(`server running in : ${port}`)
})

// listen express default property