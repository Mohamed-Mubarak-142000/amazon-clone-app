// create token and saving that in cookies
const sendShopToken = (seller, statusCode, res) => {
  try {
    const seller_token = seller.getJwtToken();

    // Options for cookies
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(statusCode).cookie("seller_token", seller_token, options).json({
      success: true,
      seller,
      seller_token,
    });
    console.log(seller);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendShopToken;
