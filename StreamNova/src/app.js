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
app.use("/api/v1/users",userRouter) //control goes to userRouter, this segregation keeps files clean 
// the end result of this route would be- http://localhost:8000/api/v1/users/register or users/login ---> check the user.routes.js file for more info





export { app }   