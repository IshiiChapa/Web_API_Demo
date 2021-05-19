const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv')
const signup = require('./routes/signup')
const auth = require('./routes/auth')
const productlist = require('./routes/product')
const cors = require('cors')
const categoryRoutes = require('./routes/category');

env.config()
mongoose.connect(process.env.DATABASE_CONNECTION_URL, () => console.log("Database Connected"))

app.use(express.json())
app.use(cors())
app.use('/api/signup', signup)
app.use('/api/auth', auth)
app.use('/api/product', productlist)
app.use('/api',categoryRoutes);



app.listen(2000, ()=> console.log("Server is up and Running...."))