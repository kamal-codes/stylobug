const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv/config')
const app = express();

//IMPORTING ROUTES
const styleRouter = require('./routes/styles')


//MIDDLEWARES
app.use(cors())
app.use(express.json());

//USING ROUTES AS A MIDDLEWARE
app.use('/', styleRouter)


app.get('/', (req, res)=>res.send("Aur bhai aa gyaa swaad"))

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => console.log("Connected to DB!!")
);



app.listen(3001)
