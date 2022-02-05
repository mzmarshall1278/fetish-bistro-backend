import { StatusType } from "../fclass.model";

export class CreateClassDto {
    name: string;
    description: string;
    fee: number;
    duration: string;
    startDate: string;
    endDate: string;
    status: StatusType
    registeredUsers: [];
    discount: number;
}