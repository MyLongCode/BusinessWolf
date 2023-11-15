import IUser from "../IUser";

export interface IAuthResponse {
    "refresh": string,
    "access": string,
    "user_data": IUser
}