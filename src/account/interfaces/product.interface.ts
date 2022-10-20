import { Document } from "mongoose";

export interface Account extends Document{
    readonly name: string;
    readonly description: string;
    readonly createdAt: Date;
}