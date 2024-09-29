import express from 'express';
import {connection} from './database/postgresql.js';
import router from './view/routes.js';
import cors from 'cors';

const app = express();

const PORT = 8000;
app.use(express.json());
app.use(cors());

app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

connection();