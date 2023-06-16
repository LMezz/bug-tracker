import mongoose from "mongoose"

import logger from "./logger"

async function connect() {
    const dbUsername = process.env.API_MONGODB_USERNAME
    const dbPassword = process.env.API_MONGODB_PASSWORD
    const dbCluster = process.env.API_MONGODB_CLUSTER

    const dbUri = `mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}/`

    try {
        await mongoose.connect(dbUri)
        logger.info("connected to db")
    } catch {
        logger.error("failed to connect to db")
        process.exit(1)
    }
}

export default connect
