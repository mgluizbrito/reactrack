import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import errorRouter from "./routes/error.js";
import homeRouter from "./routes/home.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 4000;
connectDB();
const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use(errorRouter);
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
