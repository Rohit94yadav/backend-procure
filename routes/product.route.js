const express = require("express");
const { productsController } = require("../controllers/product.controller");
const { Authentication } = require("../middlewares/Authentication");

const productsRouter = express.Router();
productsRouter.post("/add", Authentication, productsController.Addproducts);
productsRouter.get("/", Authentication, productsController.Getproducts);
productsRouter.patch(
  "/update/:id",
  Authentication,
  productsController.Updateproducts
);
productsRouter.delete(
  "/delete/:id",
  Authentication,
  productsController.Deleteproducts
);

module.exports = {
  productsRouter,
};
