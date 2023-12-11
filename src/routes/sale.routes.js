import { Router } from "express";
import { getSale, createSale, updateSale, pay, getOneSale, deleteSale} from "../controllers/sale.controller.js";

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
=======
router.get('/sale', getSale);
router.get('/getSale/:ID_Sale', getOneSale);
router.post('/Csale', createSale);
router.put('/UpdateSale', updateSale);
router.put('/paySale', pay);
router.delete('/deleteSale', deleteSale);
>>>>>>> Stashed changes


export default router;