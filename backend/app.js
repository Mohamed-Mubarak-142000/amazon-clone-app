const express = require("express");
const ErrorHandler = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./controller/UserController.js");
const shopRouter = require("./controller/ShopController.js");
const productRouter = require("./controller/ProductController.js");
const eventRouter = require("./controller/EventController.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
//config*************************
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

//routers
app.use("/api/user", userRouter);
app.use("/api/shop", shopRouter);
app.use("/api/product", productRouter);
app.use("/api/event", eventRouter);
app.use(ErrorHandler);

module.exports = app;
