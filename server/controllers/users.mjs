import { validationResult } from "express-validator";
import User from '../models/user.mjs';

//user追加の処理
async function registUser(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
     const errs=errors.array();
    return res.status(400).json(errs);
    }
     const user=new User(req.body);
     const newUser=await user.save();
     res.status(201).json(newUser);
 }

 //user削除の処理
 async function deleteUser(req,res){
    const _id=req.params.id;
   const {deletedCount}=await User.deleteOne({_id});
   if(deletedCount===0)return res.status(404).json({msg:"Target Not Found"});
   res.status(201).json({msg:"Delete succeced"});
 
 }

 //user情報変更の処理
 async function updateUser(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
     const errs=errors.array();
    return res.status(400).json(errs);
    }
    const{name,bathingDay,ent,remarks}=req.body;
    const _id=req.params.id;
    const user=await User.findById(_id);
    if(user===null)return res.status(404).json({msg:"Target Not Found"});
    if(name!==undefined)user.name=name;
    if(bathingDay!==undefined)user.bathingDay=bathingDay;
    if(ent!==undefined)user.ent=ent;
    if(remarks!==undefined)user.remarks=remarks;
    await user.save();
    res.json(user);
 }

 //全てのuser情報取得の処理
 async function getAllUser(req,res){
    const users=await User.find({"DATE":-1});
    res.json(users);
 }

 export{registUser,deleteUser,updateUser,getAllUser};