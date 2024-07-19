import express from "express";

import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/index.js";

export const app = express();

config({
  path: ".env",
});

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://myutube.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("nice working");
});

app.listen(process.env.PORT, () => {
  console.log(`server is working at ${process.env.PORT} `);
});
