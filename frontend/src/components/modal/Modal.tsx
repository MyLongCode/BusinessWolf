import React, { useEffect } from 'react'
import type { IModalProps } from './modal.intreface'
import styles from './modal.module.css'

const Modal = ({ children, className, setIsModalVisible }: IModalProps) => {
	const clickHandler = () => {
		setIsModalVisible(false)
	}

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])
	return (
		<>
			<div className={styles.darken} onClick={() => clickHandler()}></div>
			{children && (
				<div className={`${styles.modal} ${className}`}>
					<p className={styles.cross} onClick={() => clickHandler()}>
						✖
					</p>
					<div className={styles.children}>{children}</div>
				</div>
			)}
		</>
	)
}

export default Modal
