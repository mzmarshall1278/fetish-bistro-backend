import * as mongoose from 'mongoose'

export enum OrderStatus {
    new = 'New',
    pending = 'Pending',
    paid = 'Paid',
    enroute = 'Enroute',
    delivered = 'Delivered'
}

export const OrderSchema = new mongoose.Schema({
    user: {type: String, required: true},
    package: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    date: {type: String, required: true},
    status: {type: String, enum: OrderStatus, required: true}
})

export class Order {
    id: string
    user: string
    package: string;
    quantity: number
    price: number;
    date: string;
    status: OrderStatus
}

