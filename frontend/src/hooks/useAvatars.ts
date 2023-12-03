import avatars from 'assets/images/avatars'
import { useEffect, useState } from 'react'
import { IAvatar } from '../components/avatars/avatar/avatarItem.interface'

const useAvatars = () => {
	const [data, setData] = useState<IAvatar[]>([])

	useEffect(() => {
		if (data.length === 0) {
			avatars.forEach(avatar => {
				setData(prevState => [
					...prevState,
					{ id: avatars.indexOf(avatar), image: avatar }
				])
			})
		}
	}, [data.length])

	return data
}

export default useAvatars