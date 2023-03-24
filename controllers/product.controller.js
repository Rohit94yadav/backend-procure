const { productsModel } = require("../model/product.model");
const { UserModel } = require("../model/user.model");

const Addproducts = async (req, res) => {
  const { title, image, description, price, category } = req.body;
  const addproduct = new productsModel({
    title: title,
    image: image,
    description: description,
    price: price,
    category: category,
  });
  try {
    await addproduct.save();
    res.send({ msg: "Product added successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const Deleteproducts = async (req, res) => {
  const id = req.params.id;

  await productsModel.deleteOne({ _id: id });
  res.send({ msg: "Product Deleted Successfully" });
};

const Getproducts = async (req, res) => {
  const { title } = req.query;
  const _id = req.body._id;
  console.log(title, _id);
  if (title) {
    const result = await productsModel.find({ _id: _id, title: title });
    res.send(result);
  } else {
    const result = await productsModel.find({ _id: _id });
    res.send(result);
  }
};
const Updateproducts = async (req, res) => {
  const id = req.params._id;
  const { title, image, description, price, category } = req.body;

  await productsModel.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        image: image,
        description: description,
        price: price,
        category: category,
      },
    }
  );
  res.send({ msg: "Product updated Successfully" });
};

const productsController = {
  Addproducts,
  Deleteproducts,
  Updateproducts,
  Getproducts,
};

module.exports = {
  productsController,
};
