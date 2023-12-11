import { Router } from "express";
import { getProducts, getProductsByCategory, checkForDuplicates, createProduct, updateProduct, toggleProductStatus, deleteProduct } from '../controllers/product.controller.js';
import { getDetailProduct, createDetailP, deleteDetailProduct } from '../controllers/product.controller.js'; //Detalles
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

router.get('/product', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.PRODUCT
), getProducts);
router.post('/add_product', authRequired, checkForDuplicates, moduleValidation.hasPermissions(
    moduleValidation.MODULES.PRODUCT
), createProduct);
router.put('/update_product/:id', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.PRODUCT
), updateProduct);
router.put("/product/toggle/:id", authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.PRODUCT
), toggleProductStatus);
router.delete('/product/:id', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.PRODUCT
), deleteProduct);
router.get('/product/:id', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.PRODUCT
), getProductsByCategory);
// router.get('/Singleproduct/:id', authRequired, getProduct);
// router.get('/AllProducts', authRequired, getAllProduct);

//Detalles
router.get('/product_detail/:id', authRequired, getDetailProduct)
router.post('/add_details/:id', authRequired, createDetailP)
router.delete('/details/:id', authRequired, deleteDetailProduct)

export default router;