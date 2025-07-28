import dotenv from 'dotenv'
import express from "express";
import connectDB from './db/index.js';
dotenv.config({
    path:'./.env'
});
   
const app=express();
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!",err)
})






















/* THIS IS A WAY TO CONNECT DB TO OUR APP, USING IIFEs, ASYNC AWAIT DIRECLY INSIDE THE INDEX.JS FILE

import express from 'express';
const app=express();
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("App not able to talk to db");
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.log(error);
        throw err;
    }
})
     */