import { Router } from "express";

<<<<<<< Updated upstream
import { getUsers, getUserByState, getUser, checkForDuplicates, createUser, updateUser, toggleUserStatus, deleteUser } from '../controllers/user.controller.js'; // Empleados
=======
import { getUsers, getUser, checkForDuplicates, createUser, updateUser, toggleUserStatus, deleteUser, login, logout, profile, verifyToken, forgotPassword, NewPassword, getUserCookies } from '../controllers/user.controller.js'; // Empleados
import { getWaiters, createWaiter, duplicateWaiter, getWaiter } from '../controllers/user.controller.js'; // Meseros
import { editProfile, changePassword } from "../controllers/user.controller.js"; // Usuario logueado
>>>>>>> Stashed changes

import { authRequired } from '../middlewares/validateToken.js'
import ModuleValidationMiddleware from '../middlewares/ModuleValidation.middleware.js'

const router = Router();

const moduleValidation = new ModuleValidationMiddleware(
    ({
        res,
        error
    }) => {
        res.json({
            message: error.message
        })
    }
)

<<<<<<< Updated upstream
router.use(moduleValidation.hasPermissions(
    moduleValidation.MODULES.USER
))

router.get('/user', authRequired, getUsers);
router.get('/user_status', authRequired, getUserByState);
router.get('/user/:id', authRequired, getUser);
router.post('/add_user', authRequired, checkForDuplicates, createUser);
router.put('/user/:id', authRequired, updateUser);
router.put("/user/toggle/:id", authRequired, toggleUserStatus);
router.delete('/user/:id', authRequired, deleteUser);
=======
// --------------------------- EditProfile ------------------------------------- //
router.put('/edit_profile/:id', editProfile);
router.put('/change_password/:id', changePassword);

// --------------------------- Mesero ------------------------------------- //
router.get('/waiter', getWaiters);
router.get('/waiter/:id', getWaiter);
router.post('/add_waiter', duplicateWaiter, createWaiter);

// --------------------------- Login ------------------------------------- //
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile)
router.get('/verifyToken', verifyToken)
router.post('/resetPassword', forgotPassword);
router.post('/newPassword', NewPassword);

>>>>>>> Stashed changes

export default router;