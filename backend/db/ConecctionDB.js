const mongoose = require("mongoose");

const conecctionDB = () => {
  mongoose
    .connect(process.env.URL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("----------------------------------------------------------");
      console.log(`Mongoose is connected to server ${data.connection.host}`);
      console.log("----------------------------------------------------------");
    });
};
module.exports = conecctionDB;
