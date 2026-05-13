import express from 'express';
import { createUser } from '../controllers/user_controller.js';

const router = express.Router();

// POST API
router.post('/create', createUser);

export default router;