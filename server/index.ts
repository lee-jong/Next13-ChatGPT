import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const port = 3000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log(`Run : http://localhost:${port}`);
  });
});
