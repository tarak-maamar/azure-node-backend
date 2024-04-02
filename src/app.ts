/* eslint-disable no-console */
import bodyParser from "body-parser";
import express from "express";

import { connectToDatabase } from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Something went Wrong !", err);
  });
