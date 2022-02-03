import * as mongoose from 'mongoose'

export const FclassSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    fee: {type: Number, required: true},
    duration: {type: Number, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    status: {type: String, enum: ['Open', 'Started', 'Finished'], required: true},
    registeredUsers: {type: Array, required: true},
    discount: {type: String, required: true},
})

export enum StatusType {
    open = 'Open',
    started = 'Started',
    finished = 'Finished',
}

export interface FClass {
    name: string;
    description: string;
    fee: number;
    duration: number;
    startDate: string;
    endDate: string;
    status: StatusType;
    registeredUsers: []
    discount: number
}