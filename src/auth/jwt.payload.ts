import { UserType } from './user.model';
export interface JwtPayload {
    username: string;
    email: string;
    userType: UserType
}