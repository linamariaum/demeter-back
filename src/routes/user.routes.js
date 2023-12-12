import { Router } from "express";
import { getUserByState, getUsers, getUser, checkForDuplicates, createUser, updateUser, toggleUserStatus, deleteUser, existUserByEmailOrId } from '../controllers/user.controller.js'; // Empleados

import { authRequired } from '../middlewares/validateToken.js'
import ModuleValidationMiddleware from '../middlewares/ModuleValidation.middleware.js'

const router = Router();

// const moduleValidation = new ModuleValidationMiddleware(
//     ({
//         res,
//         error
//     }) => {
//         res.json({
//             message: error.message
//         })
//     }
// )

// router.use(moduleValidation.hasPermissions(
//     moduleValidation.MODULES.USER
// ))

router.get('/user', authRequired, getUsers);
router.get('/user_status', authRequired, getUserByState);
router.get('/user/:id', authRequired, getUser);
router.post('/add_user', checkForDuplicates, createUser);
router.put('/user/:id', authRequired, updateUser);
router.put("/user/toggle/:id", authRequired, toggleUserStatus);
router.delete('/user/:id', authRequired, deleteUser);
router.get('/existUserByEmailOrId/:email/:document/:userType(supplier|user)', existUserByEmailOrId);

export default router;
