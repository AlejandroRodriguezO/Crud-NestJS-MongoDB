import { Schema } from "mongoose";

export const AccountSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})