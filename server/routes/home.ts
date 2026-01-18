import express, { Request, Response, NextFunction } from "express"
import path from "path"
import { getPath } from "../utils/paths"

const homeRouter = express.Router()

homeRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).sendFile(path.join(getPath('views'), 'home', 'index.html'))
})

export default homeRouter

