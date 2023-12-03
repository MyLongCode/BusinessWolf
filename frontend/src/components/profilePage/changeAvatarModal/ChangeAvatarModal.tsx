import { clsx } from 'clsx'
import React, { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import useAvatars from '../../../hooks/useAvatars'
import useUserData from '../../../hooks/useUserData'
import AvatarItem from '../../avatars/avatar/avatarItem'
import type { IAvatar } from '../../avatars/avatar/avatarItem.interface'
import AvatarsList from '../../avatars/avatarsList'
import Modal from '../../modal/Modal'
import type { IChangeAvatarModalProps } from './changeAvatarModal.interface'
import styles from './changeAvatarModal.module.css'

const ChangeAvatarModal = ({ setIsModalVisible }: IChangeAvatarModalProps) => {
	const avatars = useAvatars()
	const { avatar, id } = useUserData()
	const [currentAvatar, setCurrentAvatar] = useState<IAvatar | null>(avatar)
	const { patchUser } = useActions()
	const [isChanged, setIsChanged] = useState(false)

	useEffect(() => {
		if (!currentAvatar) {
			setCurrentAvatar(avatar)
		}
	}, [avatar, currentAvatar])

	const avatarClickHandler = (avatar: IAvatar) => {
		setCurrentAvatar(avatar)
	}

	const saveClickHandler = () => {
		if (currentAvatar) {
			patchUser({ id: id, avatar: currentAvatar.id })
			setIsChanged(true)
		}
		setTimeout(() => setIsModalVisible(false), 500)
	}

	return (
		<Modal setIsModalVisible={setIsModalVisible} className={styles.modal}>
			<h2 className={styles.heading}>Выбери Свой аватар:</h2>
			<AvatarsList
				avatars={avatars}
				className={styles.avatars}
				onClick={avatarClickHandler}
			/>
			<AvatarItem
				avatar={!!currentAvatar ? currentAvatar : ({} as IAvatar)}
				className={styles.current}
			/>
			<button
				className={clsx('btn', styles.save, isChanged ? styles.changed : null)}
				disabled={currentAvatar?.id === avatar?.id && !isChanged}
				onClick={() => saveClickHandler()}
			>
				{isChanged ? 'Сохранено!' : 'Сохранить изменения'}
			</button>
		</Modal>
	)
}

export default ChangeAvatarModal
