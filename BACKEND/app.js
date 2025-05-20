import express from "express";
const app = express();
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/shorturl");
import { nanoid } from "nanoid";
import short_url from "./src/routes/shortUrl.routes.js";
import dotenv from "dotenv";
dotenv.config("./.env");
import urlSchema from "./src/models/shorturl.model.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create",short_url)

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const url = await urlSchema.findOne({ short_url: id });
  if (url) {
    return res.redirect(url.full_url);
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
