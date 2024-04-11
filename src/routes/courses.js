import express from "express";
import CourseController from "../app/controllers/CourseController.js";
let router = express.Router();

// nó đọc từ trên xuống
router.get("/create", CourseController.create);
router.post("/store", CourseController.store);
router.get("/:slug", CourseController.show);

export { router };
