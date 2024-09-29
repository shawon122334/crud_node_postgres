import express from 'express';
import {connection} from './database/postgresql.js';
import router from './view/routes.js';
const app = express();

const PORT = 8000;
app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

connection();