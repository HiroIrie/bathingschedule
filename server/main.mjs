import express from 'express';
import env from 'dotenv';

env.config();
const app=express();
const port=process.env.PORT || 8080; 

app.get('/api/user',(req,res)=>{
    res.send('利用者です');
})


app.listen(port,(req,res)=>{
  console.log(`${port}でサーバーが起動しました`);
})