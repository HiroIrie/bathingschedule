import express from 'express';
import {body}from "express-validator";
import { registUser,deleteUser,updateUser,getAllUser } from '../controllers/users.mjs';
import { requestErrorHandler } from '../helpers/helper.mjs';

const router =express.Router();

//userの一覧を取得する
router.get('/',requestErrorHandler(getAllUser) );
 
 //userの削除
 router.delete('/:id',requestErrorHandler(deleteUser) );
 
 
 //userの投稿
 router.post('/',
 body('name').notEmpty(),
 body('bathingDay').notEmpty(),
 body('ent').notEmpty(),
 requestErrorHandler(registUser) );

 //userの修正
 router.patch('/:id',
 body('name').notEmpty(),
 body('bathingDay').notEmpty(),
 body('ent').notEmpty(),
 requestErrorHandler(updateUser) )

 export default router;