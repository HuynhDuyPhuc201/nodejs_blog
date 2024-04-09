// file site dùng để lưu những trang không nằm trong
// một danh mục cụ thể nào (Home, Contact,...)

import express from "express";
import siteController from "../app/controllers/SiteController.js";
let router = express.Router();

router.get("/search", siteController.search);
router.get("/", siteController.index);

export { router };
