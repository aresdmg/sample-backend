import express, { Express, Request, Response } from "express"
import cors from "cors"

const app: Express = express()

app.use(
    cors({
        origin: "*",
        credentials: true
    })
)

app.use(express.json({ limit: "10kb" }))
app.use(express.urlencoded({ limit: "10kb", extended: true }))

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Hello world"
    })
})

export default app
