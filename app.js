const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv/config')
const app = express();

//IMPORTING ROUTES
const styleRouter = require('./routes/styles')
const globalSizeRouter = require('./routes/globalSizes')
const sizeMasterRouter = require('./routes/sizeMasters')
const skuMasterRouter = require('./routes/skuMasters')


//MIDDLEWARES
app.use(cors())
app.use(express.json());

//USING ROUTES AS A MIDDLEWARE
app.use('/', styleRouter)
app.use('/', skuMasterRouter)
app.use('/', sizeMasterRouter)
app.use('/', globalSizeRouter)



//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.listen(3001)