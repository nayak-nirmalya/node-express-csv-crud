import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("All Good to Go!");
});

app.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});
