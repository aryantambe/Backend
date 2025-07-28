import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'; //to perform crud operations on client's browser
const app=express();

//middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/users",userRouter) //control goes to userRouter, this segregation keeps files clean 






export { app }   