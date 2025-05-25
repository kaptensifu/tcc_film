import express from "express";
import cors from "cors";
import router from "./routes/Route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


const app = express();

dotenv.config();
app.use(cookieParser());
app.use(cors({ 
  origin: [
    'http://localhost:3000',
    'https://takhir-film-dot-c-01-450604.uc.r.appspot.com'
  ], // ganti sesuai frontend kamu
  credentials: true 
}));
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server up and running...'));