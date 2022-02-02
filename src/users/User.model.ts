import * as mongoose  from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    orders: {type: Array, required: true},
    classes: {type: Array, required: true},
})

export interface User {
    id: string;
    name: string;
}