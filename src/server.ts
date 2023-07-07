import express, { Express, Request, Response } from "express";
import cors from "cors";

import userRouter from "./backend/routes/user.route.js";

const app: Express = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("All Good to Go!");
});

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is Listening on PORT: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();

export default app;
