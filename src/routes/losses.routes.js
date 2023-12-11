import { Router } from 'express';
import { getLosses, getLoss, createLoss } from '../controllers/losses.controller.js'; 

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

router.use(moduleValidation.hasPermissions(
    moduleValidation.MODULES.SUPPLIES
))

router.get("/losses", authRequired, getLosses);
router.get("/losses/:id", authRequired, getLoss);
router.post("/losses", authRequired, createLoss);

export default router;
