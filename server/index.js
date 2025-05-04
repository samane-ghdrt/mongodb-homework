const express=require('express');
const rout=express.Router();

const {connectDb}=require('./db/connwctdb')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
rout.get();

const start=async()=>{
    try {
        await connectDb(process.env.MONGOOSE.DB)
   ap
   
    } catch (error) {
        console.log(error);
        
    }
}
 start()