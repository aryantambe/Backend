import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true,"password is required, set one"],
        }

        

    },
    {timestamps:true}
);

export const User = mongoose.model("User", userSchema); //The 'User' becomes users in mongodb
