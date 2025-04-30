require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./db/pg-base");
const models = require("./models/appeal-model");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlerMiddleware");

app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  await db.authenticate().catch((err) => console.error(err));
  await db.sync();

  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
};
start();
