import jwt from 'jwt-decode'
import type IToken from '../models/IToken'

export default class TokenService {
	static decodeToken(token: string): IToken {
		return jwt<IToken>(token)
	}
}
