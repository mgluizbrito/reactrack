import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const homeRouter = express.Router();
homeRouter.get('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', 'home', 'index.html'));
});
export default homeRouter;
