import mongoose from 'mongoose';
import { DB_NAME } from './constants';

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