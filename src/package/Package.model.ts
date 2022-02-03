import * as mongoose from 'mongoose'

export const packageSchema = new mongoose.Schema({
    price: {type: Number, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    comments: {type: Array, required: false},
    available: {type: Boolean, required: true},
    userType: {type: String, enum: ['Admin', 'Regular', 'Developer'], required: true}
});

export interface Package {
    id: string;
    price: number;
    name: string;
    description: string;
    quantity: number;
    imageUrl: string;
    comments: [];
    available: boolean;
    userType: UserType;

}

export enum UserType {
    admin = 'Admin',
    regular = 'Regular',
    developer = 'Developer'
}