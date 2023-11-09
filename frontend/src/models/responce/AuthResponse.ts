import IUser from "../IUser";

export interface AuthResponse {
    "refresh": string,
    "access": string,
    "user_data": IUser
}