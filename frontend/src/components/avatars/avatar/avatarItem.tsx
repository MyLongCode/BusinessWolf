import React from 'react'
import type { IAvatar } from './avatarItem.interface'
import styles from './avatarItem.module.css'

const AvatarItem = ({
	avatar,
	className,
	onClick,
	isActive
}: {
	avatar: IAvatar
	className?: string
	onClick?: (avatar: IAvatar) => void
	isActive?: boolean
}) => {
	return (
		<img
			className={`${styles.avatar} ${isActive ? styles.active : ''} ${
				className ? className : ''
			}`}
			src={avatar ? avatar.image : '#'}
			alt='Аватар'
			onClick={() => !!onClick && onClick(avatar)}
		/>
	)
}

export default AvatarItem
