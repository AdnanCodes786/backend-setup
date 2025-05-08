import express, { Request, Response } from "express";
import { connectToMongo } from "./db/connection";
import userRouter from "./routes/userRouter";

import dotenv from 'dotenv'
dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT)   ;

app.use(express.json());

app.use('/user',userRouter);

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello from TypeScript + Node.js!");
});

connectToMongo().then(() => {
  app.listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
  });
});
