const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');


const app =express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000

///Logging  requests
app.use(morgan('tiny'));

//Using body parser to parse all the request
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.get('/',(req,res)=>{
    res.render('index');
    //res.send("User Management System");
})

app.listen(PORT,()=>{console.log(`The application is running on http://localhost:${PORT}`)});