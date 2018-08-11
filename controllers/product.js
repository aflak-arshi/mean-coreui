const mongoose = require('mongoose');
const Products = require('../models/product');

exports.product_get_product = (req, res) => {
    Products.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                success: true,
                message: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

exports.product_create_product = (req, res) => {
    const body = req.body;
    const product = new Products({
        product_name: body.product_name,
        quantity: body.quantity,
        created_at: new Date()
    });
    product.save()
        .then(docs => {
            res.status(200).json({
                success: true,
                message: "Product Created Successfully."
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};