const ErrorHandler = require("../utils/ErrorHandler");
module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";

  //wrong mongoose id error
  if (error.name === "CastError") {
    const message = `Resources Not Found With ID..Invalid ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  //Duplicate Error
  if (error.code === 11000) {
    const message = `Duplicate Key ${Object.keys(error.keyValue)}Entered`;
    error = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (error.name === "JsonWebTokenError") {
    const message = `Your Url is InValid Please try again letter`;
    error = new ErrorHandler(message, 400);
  }

  //wrong jwt expired
  if (error.name === "TokenExpiredError") {
    const message = `Your Url is Expired Please try again letter`;
    error = new ErrorHandler(message, 400);
  }

  //response error
  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
