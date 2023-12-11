import { Router } from 'express';
<<<<<<< Updated upstream

import {getSupplier, getSupplie, createSupplier, disableSupplier, updateSupplier, deleteSupplier, getSupplierByState} from '../controllers/supplier.controller.js';

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
    moduleValidation.MODULES.SUPPLIER
))

router.get("/supplier", authRequired, getSupplier);
router.get("/supplierByState", authRequired, getSupplierByState);
router.get("/supplier/:id", authRequired, getSupplie);
router.post("/supplier", authRequired, createSupplier);
router.put("/supplier/disable/:id", authRequired, disableSupplier);
router.put("/supplier/update/:id", authRequired, updateSupplier);
router.delete("/supplier/:id", authRequired, deleteSupplier);   
=======
import {getSupplier, getSupplie, createSupplier, disableSupplier, updateSupplier, deleteSupplier, getSupplierByState} from '../controllers/supplier.controller.js';

const router = Router();

router.get("/supplier", getSupplier);
router.get("/supplierByState", getSupplierByState);
router.get("/supplier/:id", getSupplie);
router.post("/supplier", createSupplier);
router.put("/supplier/disable/:id", disableSupplier);
router.put("/supplier/update/:id", updateSupplier);
router.delete("/supplier/:id", deleteSupplier);   
>>>>>>> Stashed changes

export default router;