import express from "express";
import router from "./router.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log("App is running on port " + port);
});
