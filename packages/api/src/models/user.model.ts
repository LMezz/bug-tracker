import mongoose from "mongoose"

export interface UserDocument extends mongoose.Document {
    id: string
    username: string
    email: string
}

const userSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
)

userSchema.pre("save", (next) => {
    return next()
})

const UserModel = mongoose.model("User", userSchema)

export default UserModel
