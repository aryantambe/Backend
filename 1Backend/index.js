//import express from 'express'
const express= require('express');

const app=express();
const port=3000; //total no. of ports are 65535 in the Interent Protocol Suite

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})