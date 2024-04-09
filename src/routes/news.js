import express from "express";
import newsController from "../app/controllers/NewsController.js";
let router = express.Router();

// nó đọc từ trên xuống
router.get("/:slug", newsController.show);
router.get("/", newsController.index);

export { router };
