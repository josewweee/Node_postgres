// @ts-nocheck
/**
 * file: src/routes/product.routes.js
 * description: file responsible for the api routes related to the 'Product' class.
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Defining CRUD routes - 'Product':

// ==> Route responsible for creating a new 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// ==>  Route responsible for listing all 'Product': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

// ==> Route responsible for selecting 'Product' by 'Id': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// ==> Route responsible for updating 'Product' by 'Id': (PUT): localhost: 3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// ==> Route responsible for deleting 'Product' by 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
