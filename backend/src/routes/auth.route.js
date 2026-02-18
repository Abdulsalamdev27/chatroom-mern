import express from 'express'
import { signUp, login, logout, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';
const router = express.Router();

// router.get("/test", arcjetProtection, (req, res) => {
//     res.status(200).json({message: "test"})
// });

router.use(arcjetProtection); //anytime the route is call the arcjectproctection will be implemented

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

router.post("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));




export default router;