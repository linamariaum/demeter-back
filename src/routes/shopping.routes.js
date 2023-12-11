import { Router } from 'express';
<<<<<<< Updated upstream

import { getShopping, getShop, createShopping, disableShop, createMultipleShopping, getShopingAndShopingDetails, getShopingByProvider, getShoppingAndSuppliesBySupplierId, getShoppingAndSuppliesBySupplierIdAndDate } from '../controllers/shopping.controller.js'

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
    moduleValidation.MODULES.SHOPPING
))

router.get('/shopping', authRequired, getShopping);
router.get('/shopping/:id', authRequired, getShop);
router.post('/shopping', authRequired, createShopping);
router.post('/multpleShopping', authRequired, createMultipleShopping);
router.get('/getShopingByProvider', authRequired, getShopingByProvider);
router.get('/getShoppingAndSuppliesBySupplierId/:id', authRequired, getShoppingAndSuppliesBySupplierId);
router.get('/getShoppingAndSuppliesBySupplierIdAndDate/:id/:date', authRequired, getShoppingAndSuppliesBySupplierIdAndDate);
router.get('/getShopingAndShopingDetails', authRequired, getShopingAndShopingDetails);
router.put("/shopping/disable/:id", authRequired, disableShop);
=======
import { getShopping, getShop, createShopping, disableShop, createMultipleShopping, getShopingAndShopingDetails, getShopingByProvider, getShoppingAndSuppliesBySupplierId, getShoppingAndSuppliesBySupplierIdAndDate } from '../controllers/shopping.controller.js'

const router = Router();

router.get('/shopping', getShopping);
router.get('/shopping/:id', getShop);
router.post('/shopping', createShopping);
router.post('/multpleShopping', createMultipleShopping);
router.get('/getShopingByProvider', getShopingByProvider);
router.get('/getShoppingAndSuppliesBySupplierId/:id', getShoppingAndSuppliesBySupplierId);
router.get('/getShoppingAndSuppliesBySupplierIdAndDate/:id/:date', getShoppingAndSuppliesBySupplierIdAndDate);
router.get('/getShopingAndShopingDetails', getShopingAndShopingDetails);
router.put("/shopping/disable/:id", disableShop);
>>>>>>> Stashed changes


export default router;