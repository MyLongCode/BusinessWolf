import { ReactNode } from 'react'

export interface IModalProps {
	children?: ReactNode
	className?: string
	setIsModalVisible: (isModalVisible: boolean) => void
}
