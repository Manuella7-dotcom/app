const express = require('express')
//will help to push the environemntal data. config means making sure everything is in place
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


//get method
app.get('/', (req, res)=>{
    res.send('We are on home');
})

mongoose.connect(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log('connected to the database')})
.catch(err=>{console.log('ERROR',err)});
console.log("mongodb+srv://Manuella:emma247@anneroy.olfao.mongodb.net/", process.env.MONGODB_LINK);

app.listen(process.env.PORT, ()=>{console.log('connected to port')})

//nodemonupdates the prgram for every change made
//CTRL + C gets you out of the process