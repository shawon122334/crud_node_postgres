import express from 'express';
import { getAllEmp,addEmp } from '../conrollers/userController.js';

const router = express.Router();

router.get('/getAllEmp',getAllEmp);
router.post('/addEmp',addEmp);

export default router;