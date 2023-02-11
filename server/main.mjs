import express from 'express';
import env from 'dotenv';
import './helpers/db.mjs';
import apiRouter from './api-routes/index.mjs';
env.config();
const app=express();
const port=process.env.PORT||8080;

app.use(express.json());
app.use('/api',apiRouter);



app.listen(port,()=>{
    console.log(`${port}でサーバーが起動しました`);
})