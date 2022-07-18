
const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

const Port = process.env.Port || 5000

// connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', (req,res) => {
    res.json({message:'Welcome to Support Desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes') )

app.use(errorHandler)

app.listen(Port, ()=> console.log(`Server started at port number ${Port}`))