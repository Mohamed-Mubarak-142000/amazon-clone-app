const express = require("express");
const router = express.Router();
const catchAsyncError = require("../middleware/catchAsyncErrors.js");
const { upload } = require("../multer.js");
const ShopModel = require("../models/ShopModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const ProductModel = require("../models/ProductModel");
const fs = require("fs");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await ShopModel.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler(error, 400));
      } else {
        const files = req.files;
        const imagesUrls = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imagesUrls;
        productData.shop = shop;

        const product = await ProductModel.create(productData);
        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 500));
    }
  })
);

router.get(
  "/get-all-products-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await ProductModel.find({ shopId: req.params.id });
      res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 500));
    }
  })
);

router.delete(
  "/delete-shop-product/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const productData = await ProductModel.findById(productId);
      productData.images.forEach((image) => {
        const filename = image;
        const filePath = `uploads/${filename}`;

        fs.unlink(filePath, (error) => {
          console.log(error);
        });
      });

      const product = await ProductModel.findByIdAndDelete(productId);

      if (!product) {
        return next(new ErrorHandler("Please provide Product ID.!", 400));
      }

      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error, 500));
    }
  })
);

// get all products
router.get(
  "/get-all-products",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await ProductModel.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
