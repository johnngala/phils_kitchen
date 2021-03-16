const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { sendError} = require('./frontend/src/utils/ErrorHandler')
const cookieParser = require('cookie-parser')

require('dotenv').config();

const app = express()

app.enable('trust proxy')

app.use(cors({
    origin : 'http://localhost:3000',
    credentials :true
}))

app.use(bodyParser.json())
app.use(cookieParser())

app.use((err ,res ,req ,next) => {
    sendError(err , res )
}) 

//added
if(process.env.NODE_ENV = "production"){
    //set static folder
    app.use(express.static("frontend/build"))

    app.get("*" , (req,res) => {
        res.sendFile(path.resolve(__dirname , "../frontend" , "build" , "index.html"))
    })
}

const DB = process.env.DATABASE

mongoose.connect( DB , {
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useCreateIndex :true 
}).then(() => console.log('connected to database...'))

const port = process.env.PORT || 5000

app.listen( port , () => console.log(`server started on port ${port}`))