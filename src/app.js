import express from "express";
import cors from "cors";
import routes from "./routes/ai.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", routes);

export default app;
