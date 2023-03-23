const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
});

const productsModel = mongoose.model("products", productsSchema);

module.exports = {
  productsModel,
};