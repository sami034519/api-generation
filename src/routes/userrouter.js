import express from "express";
import Usercontroller from "../controller/usercontroller.js";
import usercontroller from "../controller/usercontroller.js";
const userRouter = express.Router();
userRouter.get("/:id", Usercontroller.getUser);
userRouter.post("/", Usercontroller.postdata);
userRouter.put("/:id",usercontroller.updatedata);
userRouter.delete("/:id",usercontroller.deletedata);

export default userRouter;
