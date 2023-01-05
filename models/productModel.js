const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, require: true },
    comment: { type: String },
    rating: { type: Number, require: true },
  },
  { timestamp: true }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    countInStock: {
      type: Number,
      require: true,
    },
    reating: {
      type: Number,
      require: true,
    },
    review: [reviewSchema],
  },
  { timestamp: true }
);

module.exports = mongoose.model("products", productSchema);
