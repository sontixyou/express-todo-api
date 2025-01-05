import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Express + TypeScript Server!" });
})
  .get("/todos", (req: Request, res: Response) => {
    res.json({ message: "List of all todos" });
  });

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
