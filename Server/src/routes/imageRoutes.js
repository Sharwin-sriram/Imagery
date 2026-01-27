import express from "express";
import { getAllImages } from "../controller/imageController";
const router = express.Router();

router.get("/", getAllImages);
