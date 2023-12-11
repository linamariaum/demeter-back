import { Router } from 'express';

import { getSupplies, getSupplie, checkForDuplicates, createSupplies, disableSupplies, updateSupplies, deleteSupplies, updateUnitSupplieByIdAndSend } from '../controllers/supplies.controller.js';

import { authRequired } from '../middlewares/validateToken.js'
import ModuleValidationMiddleware from '../middlewares/ModuleValidation.middleware.js'

const router = Router();

<<<<<<< Updated upstream
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

router.get("/supplies", authRequired, getSupplies);
router.post("/supplies", authRequired, checkForDuplicates, createSupplies);
router.put("/supplies/disable/:id", authRequired, disableSupplies);
router.put("/supplies/update/:id", authRequired, updateSupplies);
router.put("/supplies/updateUnitSupplieById/:id/:quantity", authRequired, updateUnitSupplieByIdAndSend);
router.delete("/supplies/:id", authRequired, deleteSupplies);
router.get("/supplies/:id", authRequired, getSupplie);
=======
router.get("/supplies", getSupplies);
router.post("/supplies", checkForDuplicates, createSupplies);
router.put("/supplies/disable/:id", disableSupplies);
router.put("/supplies/update/:id", updateSupplies);
router.put("/supplies/updateUnitSupplieById/:id/:quantity", updateUnitSupplieByIdAndSend);
router.delete("/supplies/:id", deleteSupplies);
router.get("/supplies/:id", getSupplie);
>>>>>>> Stashed changes

export default router;