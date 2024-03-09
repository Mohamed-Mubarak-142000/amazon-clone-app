const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { upload } = require("../multer");
const ShopModel = require("../models/ShopModel");
const ErrorHandler = require("../utils/ErrorHandler");
const EventsModel = require("../models/EventsModel");
const { isSellerAuth } = require("../middleware/auth");
const router = express.Router();
const fs = require("fs");

router.post(
  "/create-event",
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
        const eventData = req.body;
        eventData.images = imagesUrls;
        eventData.shop = shop;

        const event = await EventsModel.create(eventData);
        res.status(201).json({
          success: true,
          event,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 500));
    }
  })
);

router.get(
  "/get-all-events-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const event = await EventsModel.find({ shopId: req.params.id });
      res.status(200).json({
        success: true,
        event,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 500));
    }
  })
);

router.delete(
  "/delete-shop-event/:id",
  isSellerAuth,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const eventData = await EventsModel.findById(productId);

      eventData.images.forEach((image) => {
        const filename = image;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (error) => {
          console.log(error);
        });
      });

      const event = await EventsModel.findByIdAndDelete(productId);

      if (!event) {
        return next(new ErrorHandler("Please provide Product ID.!", 400));
      }

      res.status(200).json({
        success: true,
        event,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error, 500));
    }
  })
);

router.get("/get-all-events", async (req, res, next) => {
  try {
    const events = await EventsModel.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
});

module.exports = router;
