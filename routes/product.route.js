const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, editProduct, deleteProduct } = require("../controller/product.controller");

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", createProduct);
router.put("/product/:id", editProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;