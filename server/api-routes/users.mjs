import express from 'express';
import User from '../models/user.mjs';
const router =express.Router();

router.get('/',async function(req,res){
    const users=await User.find({"DATE":-1});
    res.json(users);
 });
 
 router.delete('/:id',async(req,res)=>{
    const _id=req.params.id;
   const {deletedCount}=await User.deleteOne({_id});
   if(deletedCount===0)return res.status(404).json({msg:"Target Not Found"});
   res.status(201).json({msg:"Delete succeced"});
 
 });
 
 router.post('/',async function(req,res){
     const user=new User(req.body);
     const newUser=await user.save();
     res.status(201).json(newUser);
 });

 export default router;