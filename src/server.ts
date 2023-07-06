import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("All Good to Go!");
});

const PORT = 3000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is Listening on PORT: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
