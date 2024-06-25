import express from 'express'
import { registerUser } from '../controller/userController';

const router = express.Router();

// Define la ruta para registar un nuevo usuario 
router.post('/register', registerUser);

export default router