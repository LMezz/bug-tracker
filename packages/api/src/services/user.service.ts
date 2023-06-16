import { DecodedIdToken } from "firebase-admin/auth"

import { auth } from "../../firebase/admin"
import UserModel from "../models/user.model"
import logger from "../utils/logger"

interface CreateUserInput {
    jwt: string
    username: string
}

export async function createUser(input: CreateUserInput) {
    const { jwt, username } = input
    try {
        const tokenInfo: DecodedIdToken = await auth.verifyIdToken(input.jwt)
        const id: string = tokenInfo.sub
        const modelData = {
            id: tokenInfo.sub,
            username,
            email: tokenInfo.email,
        }
        return await UserModel.create(modelData)
    } catch (error: any) {
        throw new Error(error)
    }
}
