import mongoose from "mongoose";

//this is a mini schema we made in order to store it as an array because a customer can order multiple items hence we need a seperate schema for order items.
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true,
    }
})
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type:[orderItemSchema]
    }


},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema);