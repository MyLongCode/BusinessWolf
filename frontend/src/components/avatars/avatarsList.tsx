import React, { useState } from 'react'
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
	const [active, setActive] = useState(0)

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
