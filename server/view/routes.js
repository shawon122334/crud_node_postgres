import express from 'express';
import { getAllEmp } from '../conrollers/userController.js';

const router = express.Router();

router.get('/getAllEmp',getAllEmp);

export default router;