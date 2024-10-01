import express from "express";
import userRouter from "./routes/userrouter.js";
const router = express.Router();
router.use("/sami", userRouter);

export default router