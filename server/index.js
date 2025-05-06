import dotenv from'dotenv/config';

import express from 'express';
import rout from './ROUT/rout.js'; 

const app=express();

import connectDb from './db/connwctdb.js';
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