import express from "express"

import { middleware } from "./middleware/httpRequests.js"
import opinionsRouter from "./routes/opinions.js"

const app = express()

app.use(middleware)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(express.json())

app.use(opinionsRouter)

app.listen(3010, () => {
    console.log(`\n💬 Backend do Opinly pronto para depositar suas opiniões...`)
})