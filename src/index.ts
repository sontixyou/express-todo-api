import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Express + TypeScript Server!" });
})
  .get("/todos", (req: Request, res: Response) => {
    res.json({
      "todos": [
        {
          "id": 1,
          "title": "Do laundry",
          "completed": false
        },
        {
          "id": 2,
          "title": "Clean room",
          "completed": true
        },
        {
          "id": 3,
          "title": "Study for exam",
          "completed": false
        }
      ]
    });
  });

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
