import React, { useEffect, useState } from 'react'
import useUserData from '../../hooks/useUserData'
import AvatarItem from './avatar/avatarItem'
import type { IAvatar } from './avatar/avatarItem.interface'

const AvatarsList = ({
	avatars,
	className,
	onClick
}: {
	avatars: IAvatar[]
	className?: string
	onClick?: (avatar: IAvatar) => void
}) => {
	const { avatar } = useUserData()
	const [active, setActive] = useState(avatar?.id)

	useEffect(() => {
		if ((!active && active !== 0) || active === -1) {
			setActive(avatar?.id)
		}
	}, [avatar, active])

	const clickHandler = (avatar: IAvatar) => {
		setActive(avatar.id)
		if (onClick) {
			onClick(avatar)
		}
	}

	return (
		<ul className={className}>
			{avatars.map(avatar => {
				return (
					<AvatarItem
						key={avatar.id}
						avatar={avatar}
						onClick={avatar => clickHandler(avatar)}
						isActive={avatar.id === active}
					/>
				)
			})}
		</ul>
	)
}

export default AvatarsList
