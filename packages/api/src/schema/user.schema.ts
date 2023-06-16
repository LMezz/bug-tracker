import { object, string, TypeOf } from "zod"

export const createUserSchema = object({
    body: object({
        jwt: string({
            required_error: "JWT is required",
        }),
        username: string({
            required_error: "Username is required",
        })
            .min(3)
            .max(48),
    }),
})

export type CreateUserInput = TypeOf<typeof createUserSchema>
