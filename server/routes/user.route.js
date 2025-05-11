import express from 'express';
import { login, logout, signUp } from '../controllers/user.controller.js';
// import { login, logout, signUp } from '../controllers/user.controller.js';
// import isAuthenticated from '../middlewares/isAuthenticated.js';
// import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.post("/signup" , signUp)
router.post("/login" , login)
router.get("/logout" , logout)
// router.post("/profile/update" , isAuthenticated , singleUpload , updateProfile)

export default router;