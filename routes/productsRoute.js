const express = require("express");

const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      return res.send(docs);
    } else {
      return res.status(400).json({ message: "something went wrong" });
    }
  });
});

router.post("/getproductbyid", async (req, res) => {
  try {
    const product = await Product.findById(req.body.productid);
    //need body parser to read body.productid thats sent from front end
    if (!product) {
      return res.status(400).json({ message: "something went wrong" });
    }
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
