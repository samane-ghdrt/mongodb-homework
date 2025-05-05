const express=require('express');
const rout =express.Router();
const{addFacultyMember,getAllFacultyMembers,deleteFacultyMember}=require('../controler/controler.js');


rout.get('/',getAllFacultyMembers);
rout.post('/',addFacultyMember);
rout.delete('/:id',deleteFacultyMember);

export default rout;
