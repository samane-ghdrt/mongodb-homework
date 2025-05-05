import { log } from 'console';

const {user}=require('../model/user.model.js');

export const getAllFacultyMembers=async (req,res)=>{
try {
    const faculty=await user.find();
    res.status(200).json(faculty);
} catch (error) {
    console.log();
    res.status(404).json({msg:error});
    
}
};
export const addFacultyMember=async(req,res)=>{
    try {
        const faculty=await user.create(req.body);
        res.status(201).json(faculty);
    } catch (error) {
        console.log();
        res.status(404).json({msg:error});

    }
};
export const deleteFacultyMember=async(req,res)=>{
    try {
        const id=Number(req.params.id)
        const deletUser=user.findOneAndDelete(id);
        res.status(202).json(deletUser);

    } catch (error) {
        console.log();
        res.status(404).json({msg:error});
    }
}