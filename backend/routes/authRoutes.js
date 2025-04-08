// backend/routes/authRoutes.js
// backend/routes/authRoutes.js
import express from 'express';
import { signup } from '../controllers/authController.js'; // Use import

const router = express.Router();

router.post('/signup', signup);

export default router;  // Use export default

