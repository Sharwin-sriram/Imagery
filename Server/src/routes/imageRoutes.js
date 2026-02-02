import express from "express";
import {
  getHomePageImages,
  getSearchResults,
} from "../controller/imageController.js";
const router = express.Router();

router.get("/", getHomePageImages);
router.get("/:query", getSearchResults);

export default router;
