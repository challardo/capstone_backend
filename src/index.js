const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const MovieRouter = require("./routes/movieRoutes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("server active");
  res.json({ message: "Hello Bootcamp!" });
});

app.use("/movies", MovieRouter);

const connectDb = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DB_URI);
  console.log("Database connected");
};

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectDb();
});

module.exports = { app, server };
