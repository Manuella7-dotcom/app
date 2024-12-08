const express = require('express')
//will help to push the environemntal data. config means making sure everything is in place
require('dotenv/config')

const app = express();


//get method
app.get("/", (req, res) => {
    res.send('We are on home');
});

app.listen(process.env.PORT, ()=>{console.log('connected to port')})

//nodemonupdates the prgram for every change made
//CTRL + C gets you out of the process