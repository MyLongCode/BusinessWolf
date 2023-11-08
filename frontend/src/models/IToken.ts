import IUser from "./IUser";

export default interface IToken {
    "token_type": "access" | "refresh",
    "exp": number,
    "iat": number,
    "jti": string,
    "user_id": number,
    "user_data": IUser
}