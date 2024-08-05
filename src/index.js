// require('dotenv').config({path: './env'})    ///old way

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
console.log("krushna");
connectDB().then(()=>{
  // console.log("krushna")
  app.listen(process.env.PORT || 8000, ()=>{
    
    console.log(`server is Running at port ${process.env.PORT}`)
  })
}).catch((err)=>{
  console.log("Mongo Db connection failed")
})












// import express from "express";
// const app=express()

// ( async() => {
// try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("Error:", error);
//     throw error;
//    })
//    app.listen(process.env.PORT, ()=>{
//     console.log(`App is listening on ${process.env.PORT}`)
//    })
// } catch (error) {
//     console.log("ERROR:" , error)
// }
// })()
