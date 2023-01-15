import "dotenv/config";
import express from 'express';
import cors from "cors";
import db from './config/mongo';
import { router } from "./routes";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

db().then(()=>console.log("DB Connected"))

app.listen(PORT, ()=>console.log("Lissteting in port", PORT))