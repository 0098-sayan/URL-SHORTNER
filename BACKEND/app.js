import express from "express";
const app = express();
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/shorturl");
import { nanoid } from "nanoid";
import short_url from "./src/routes/shortUrl.routes.js";
import dotenv from "dotenv";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { getShortUrl } from "./src/dao/short_url.js";
dotenv.config("./.env");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create",short_url)

app.get('/:id', async (req, res) => {
  const shortUrl = await getShortUrl(req.params.id); 
});


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
