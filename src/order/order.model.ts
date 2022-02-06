import * as mongoose from 'mongoose'
import { User } from 'src/auth/user.model'
import { Package } from 'src/package/Package.model'

export enum OrderStatus {
    new = 'New',
    pending = 'Pending',
    paid = 'Paid',
    enroute = 'Enroute',
    delivered = 'Delivered'
}

export const OrderSchema = new mongoose.Schema({
    user: {},
    package: {},
    quantity: {},
    price: {},
    date: {},
    status: {}
})

export class Order {
    user: User
    package: Package;
    quantity: number
    price: number;
    date: string;
    status: OrderStatus
}

