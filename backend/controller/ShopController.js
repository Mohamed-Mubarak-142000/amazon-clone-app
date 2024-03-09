const express = require("express");
const router = express.Router();
const path = require("path");
const jwt = require("jsonwebtoken");
const ShopModel = require("../models/ShopModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const sendEmail = require("../utils/SendE-Mail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const sendToken = require("../utils/JwtToken.js");
const { upload } = require("../multer.js");
const fs = require("fs");
const sendShopToken = require("../utils/shopToken.js");
const { isSellerAuth } = require("../middleware/auth.js");

// Create user
router.post("/create-seller", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password, address, phoneNumber, zipCode } = req.body;
    const userEmail = await ShopModel.findOne({ email });

    if (userEmail) {
      // return next(new ErrorHandler("User already exists", 400));
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (error) => {
        if (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Error Deleting File",
          });
        }
      });
      res.status(400).send({
        success: false,
        message: "User Already Exist.!",
      });
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const seller = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
      phoneNumber: phoneNumber,
      address: address,
      zipCode: zipCode,
    };

    const activationToken = createActivationToken(seller);
    const activationUrl = `http://localhost:3000/shop/activation/${activationToken}`;

    try {
      await sendEmail({
        email: seller.email,
        subject: "Activate your account",
        message: `Hello ${seller.name}, please click on the link to activate your account: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email at ${seller.email} to activate your account!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// Create activation token
const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "7d",
  });
};

// // Activate user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newSeller = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 400));
      }

      const { name, email, password, avatar, address, phoneNumber, zipCode } =
        newSeller;

      let seller = await ShopModel.findOne({ email });

      //check user exist
      if (seller) {
        return next(new ErrorHandler("User already exists", 400));
      }

      //create user
      seller = await ShopModel.create({
        name,
        email,
        password,
        avatar,
        address,
        phoneNumber,
        zipCode,
      });

      sendToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// login user
router.post(
  "/login-seller",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(
          new ErrorHandler("Please Provide email or password.!", 400)
        );
      }

      const seller = await ShopModel.findOne({ email }).select("+password");

      if (!seller) {
        return next(new ErrorHandler("User Desn't Existing.!", 400));
      }

      const isPasswordValid = await seller.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide correct information!", 400)
        );
      }
      sendShopToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//loading shop seller
router.get(
  "/get-seller",
  isSellerAuth,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const seller = await ShopModel.findById(req.seller._id);
      if (!seller) {
        return next(new ErrorHandler("User doesn't exist...!", 400));
      }

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

router.get(
  "/logout-shop",
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });

      res.status(201).json({
        success: true,
        message: "Log out Successfully",
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get shop info
router.get(
  "/get-shop-info/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shop = await ShopModel.findById(req.params.id);
      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
