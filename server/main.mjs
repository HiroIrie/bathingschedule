import express from 'express';
import env from 'dotenv';
import './helpers/db.mjs';
import apiRouter from './api-routes/index.mjs';
import path from 'path';;
env.config();
const app=express();
const port=process.env.PORT||8080;

app.use(express.json());
app.use(express.static('build'));
app.use('/api',apiRouter);

app.get('*',(req,res)=>{
    const innerHtml=path.resolve('build','index.html');
    res.sendFile(innerHtml);
})

app.use(function(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({msg:'不正なエラーが発生しました'})
})

app.listen(port,()=>{
    console.log(`${port}でサーバーが起動しました`);
})