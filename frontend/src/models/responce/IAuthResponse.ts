import type IUser from '../IUser'

export default interface IAuthResponse {
	refresh: string
	access: string
	user_data: IUser
}
