const express=require('express');
const rout =require(express.Router());
const{addFacultyMember,getAllFacultyMembers,deleteFacultyMember}=require('../controler/controler.js');


rout.get('/',getAllFacultyMembers);
rout.post()