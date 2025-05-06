import express from 'express';
const rout =express.Router();
import {addFacultyMember,getAllFacultyMembers,deleteFacultyMember} from '../controler/controler.js';


rout.get('/',getAllFacultyMembers);
rout.post('/',addFacultyMember);
rout.delete('/:id',deleteFacultyMember);

export default rout;
