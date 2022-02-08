import * as mongoose from 'mongoose'

export const FclassSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    fee: {type: Number, required: true},
    duration: {type: Number, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    status: {type: String, enum: ['Open', 'Started', 'Finished'], required: true},
    discount: {type: Number, required: true},
    openForRegistration: {type: Boolean, required: true}
})

export enum StatusType {
    open = 'Open',
    started = 'Started',
    finished = 'Finished',
}

export interface FClass {
    id: string;
    name: string;
    description: string;
    fee: number;
    duration: number;
    startDate: string;
    endDate: string;
    status: StatusType;
    discount: number;
    openForRegistration: boolean;
}