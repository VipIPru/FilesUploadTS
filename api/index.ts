import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/uploadFile/", (req: Request, res: Response) => {
   let allFiles = req.body;
   console.log(allFiles);
   res.send("File uploaded successfully");
});

app.listen(port, () => {
   console.log("Server started successfully on port ${port}");
});