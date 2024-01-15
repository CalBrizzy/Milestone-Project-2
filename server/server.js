const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// MONGOOSE SETUP
const uri = process.env.ATLAS_URI
mongoose.connect(uri)
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log('Error connecting to MongoDB:', err))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

