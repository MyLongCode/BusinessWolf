import { useEffect, useMemo, useState } from 'react'
import { IAvatar } from '../components/avatars/avatar/avatarItem.interface'
import useAvatars from './useAvatars'
import { useTypedSelector } from './useTypedSelector'

interface IUserData {
	id: number
	address: string
	coins: number
	grade: string
	email: string
	fullName: string
	phone: string
	avatar: IAvatar | null
}

const useUserData = (): IUserData => {
	const { user } = useTypedSelector(state => state.auth)
	const id = useMemo(() => user?.id || -1, [user])
	const avatars = useAvatars()
	const [fullName, setFullName] = useState('')
	const [avatar, setAvatar] = useState<IAvatar | null>(null)
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [grade, setGrade] = useState('')
	const [coins, setCoins] = useState(0)

	useEffect(() => {
		if (user) {
			setFullName(user.full_name)
			setPhone(user.phone)
			setEmail(user.email)
			setAddress(user.address)
			setGrade(user.education_class)
			setCoins(user.coins)
		}
	}, [user])

	useEffect(() => {
		setAvatar(avatars.find(avatar => avatar.id === user?.avatar) || null)
	}, [avatars, user])

	return {
		id: id,
		address: address,
		coins: coins,
		grade: grade,
		email: email,
		fullName: fullName,
		phone: phone,
		avatar: avatar
	}
}

export default useUserData
