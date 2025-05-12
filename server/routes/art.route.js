import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import { getAllArt, uploadArt } from "../controllers/art.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";



const router = express.Router();

// POST /api/art/upload
router.post("/upload", isAuthenticated  , singleUpload , uploadArt);
router.get("/get-arts", isAuthenticated   , getAllArt);

export default router;
