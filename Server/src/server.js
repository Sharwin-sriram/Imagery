import "dotenv/config";
import cors from "cors";
import express from "express";
import imageRoutes from "./routes/imageRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api", imageRoutes);

app.listen(5001, () => {
  console.log("Server started in the port 5001");
});
