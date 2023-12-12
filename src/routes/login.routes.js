import { Router } from "express";

import { login, logout, profile, verifyToken, forgotPassword, NewPassword, getUserCookies, getCurrentUser } from '../controllers/login.controller.js'; // Login
import { editProfile, changePassword } from "../controllers/login.controller.js"; // Usuario logueado

import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

// --------------------------- EditProfile ------------------------------------- //

router.put('/edit_profile/:id', authRequired, editProfile);
router.put('/change_password/:id', authRequired, changePassword);

// --------------------------- Login ------------------------------------- //
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile)
router.get('/verifyToken', verifyToken)
router.post('/resetPassword', forgotPassword);
router.post('/newPassword', NewPassword);
router.get('/getUserCookies', authRequired, getUserCookies);
router.get('/getCurrentUser', authRequired, getCurrentUser);


export default router;

