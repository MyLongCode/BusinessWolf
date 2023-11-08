import IUser from "../models/IUser";
import jwt from "jwt-decode";
import IToken from "../models/IToken";

export default class UserService {
    static getUserFromToken(token: string): IUser {
        const decode: IToken = jwt(token)
        return decode.user_data
    }
}