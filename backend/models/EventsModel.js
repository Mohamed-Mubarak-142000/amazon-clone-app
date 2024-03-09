const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name.!"],
  },
  description: {
    type: String,
    required: [true, "Please provide product description.!"],
  },
  category: {
    type: String,
    required: [true, "Please provide product category.!"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  finishDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "running",
  },
  tags: {
    type: String,
    required: [true, "Please provide product tags.!"],
  },
  originalPrice: {
    type: Number,
    required: [true, "Please provide product originalPrice.!"],
  },
  discountPrice: {
    type: Number,
    required: [true, "Please provide product discountPrice.!"],
  },
  stock: {
    type: Number,
    required: [true, "Please provide product stock.!"],
  },
  images: [
    {
      type: String,
    },
  ],
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Event", eventSchema);
