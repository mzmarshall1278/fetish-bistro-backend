import * as mongoose from 'mongoose'
import { FClass } from 'src/fclass/fclass.model';

export enum UserType {
    admin = 'Admin',
    regular = 'Regular',
    developer = 'Developer'
}

export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    userType: {type: String, enum: UserType, required: true},
    orders: {type: Array, required: true},
    classes: {type: String, required: true},
})

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    salt: string;
    UserType: UserType;
    phoneNumber: string,
    orders: [];
    classes: FClass[];
}

