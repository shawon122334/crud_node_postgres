import express from 'express';
import { getAllEmp,addEmp,updateEmp,deleteEmp} from '../conrollers/userController.js';

const router = express.Router();

router.get('/getAllEmp',getAllEmp);
router.post('/addEmp',addEmp);
router.put('/emp/:empID',updateEmp);
router.delete('/emp/:empID',deleteEmp);

export default router;