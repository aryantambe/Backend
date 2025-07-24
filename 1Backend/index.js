//import express from 'express'
const express= require('express');

const app=express();
const port=3000; //total no. of ports are 65535 in the Interent Protocol Suite

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/twitter',(req,res)=>{
    res.send("aryan-twitter");
})
app.get('/login',(req,res)=>{
    res.send('<h1> Login please</h1>');
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
}) 