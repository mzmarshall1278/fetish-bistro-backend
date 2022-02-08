import * as mongoose from 'mongoose'
import { User } from 'src/auth/user.model';
import { FClass } from 'src/fclass/fclass.model';

export enum RegistrationStatus {
    pending= 'Pending',
    confirmed= 'Confirmed'
}

export const RegistrationSchema = new mongoose.Schema({
    user: {type: String, required: true},
    fclass: {type: String, required: true},
    date: {type: String, required: true},
    status: {type: String,  required: true},
})

export interface Registration {
    user: string | User;
    fclass: string| FClass;
    date: string;
    status: RegistrationStatus;
}