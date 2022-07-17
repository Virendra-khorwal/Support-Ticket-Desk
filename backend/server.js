const express = require('express')
const dotenv = require('dotenv').config()

const Port = process.env.Port

const app = express()

app.get('/', (req,res) => {
    res.json({message:'Welcome to Support Desk API'})
})

// ROutes
app.use('/api/users', require('./routes/userRoutes') )

app.listen(Port, ()=> console.log(`Server started at port number ${Port}`))