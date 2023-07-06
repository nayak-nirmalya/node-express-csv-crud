import express, { Express, Request, Response } from "express";

import mainRouter from "./backend/routes/userRoute.js";

const app: Express = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("All Good to Go!");
});

app.use(express.json());

app.use("/api/v1/users", mainRouter);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is Listening on PORT: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
