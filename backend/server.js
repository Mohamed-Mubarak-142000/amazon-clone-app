const app = require("./app");
const connectionDB = require("./db/ConecctionDB");
//handle uncaugth exception***************
process.on("uncaughtException", (error) => {
  console.log(`Error : ${error.message}`);
  console.log("Shutting down the server for handle uncaught exception");
});

//connection to server
connectionDB();

//config*************************
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

//create server
const server = app.listen(process.env.PORT, () => {
  console.log("----------------------------------------------------------");
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  console.log("----------------------------------------------------------");
});

//unhandle promise rejection
process.on("unhandledRejection", (error) => {
  console.log(`Shutting down the server for : ${error.message}`);
  console.log("Shutting down the server for unhandle promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
