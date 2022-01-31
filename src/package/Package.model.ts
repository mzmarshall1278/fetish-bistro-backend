import * as mongoose from 'mongoose'

export const packageSchema = new mongoose.Schema({
    price: {type: Number, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    comments: {type: Array, required: false}
});

export interface Package {
    price: number;
    name: string;
    description: string;
    imageUrl: string;
    comments: [];
}