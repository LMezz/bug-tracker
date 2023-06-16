import cors from "cors"
import dotenv from "dotenv"
import express, { Express } from "express"

import routes from "./routes"
import connect from "./utils/connect"
import logger from "./utils/logger"

dotenv.config()

const app: Express = express()
app.use(express.json())

const corsOrigin: string = process.env.API_WEB_SERVER_URL!
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        optionsSuccessStatus: 200,
    })
)

const port = process.env.API_PORT

app.listen(port, async () => {
    routes(app)
    logger.info(`Server is running at http://localhost:${port}`)
    await connect()
})
