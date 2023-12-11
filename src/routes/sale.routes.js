import { Router } from "express";
import { getSale, createSale, updateSale, pay, getOneSale, deleteSale, getSaleUp, getSaleDown, getSalesByTimeRange} from "../controllers/sale.controller.js";

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
    moduleValidation.MODULES.SALES
))

router.get('/sale', authRequired, getSale);
router.get('/saleUP', authRequired, getSaleUp);
router.get('/saleDOWN', authRequired, getSaleDown);
router.get('/getSale/:ID_Sale', authRequired, getOneSale);
router.get('/getSaleByTime', authRequired, getSalesByTimeRange);
router.post('/Csale', authRequired, createSale);
router.put('/UpdateSale', authRequired, updateSale);
router.put('/paySale', authRequired, pay);
router.delete('/deleteSale', authRequired, deleteSale);


export default router;