require('dotenv').config;

const express=require('express');
const {rout}=require('./ROUT/rout.js'); 

const app=express();

const {connectDb}=require('./db/connwctdb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/member',rout);

const start=async()=>{
    try {
        await connectDb(process.env.MONGOOSE.DB)
   ap
   
    } catch (error) {
        console.log(error);
        
    }
}
 start();