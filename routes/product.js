const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/product');
const checkAuth = require('../middleware/check-auth');

const productRoutes = (database) => {

	router.post("/", ProductsController.product_create_product);

	router.get("/", ProductsController.product_get_product);

	return router;
};

module.exports = productRoutes;


