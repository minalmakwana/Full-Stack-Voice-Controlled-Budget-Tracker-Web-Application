import express from 'express';

import * as loginController from '../controllers/login.js';
const router = express.Router();

router.route('/login')
    .post(loginController.save)

router.route('/register')
    .post(loginController.register) 

export default router;