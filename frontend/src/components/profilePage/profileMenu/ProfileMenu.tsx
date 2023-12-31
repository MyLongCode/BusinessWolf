import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Links from '../../../config/links.config'
import { useActions } from '../../../hooks/useActions'
import useUserData from '../../../hooks/useUserData'
import styles from './profileMenu.module.css'

const ProfileMenu = ({ isWhite }: { isWhite?: boolean }) => {
	const [burgerHidden, setBurgerHidden] = useState(true)
	const [burgerAnimating, setBurgerAnimating] = useState(true)
	const { logout } = useActions()
	const { avatar } = useUserData()
	const navigate = useNavigate()
	const location = useLocation()
	const burgerRef = useRef(null)
	const profileRef = useRef(null)

	const menuClickHandler = () => {
		setBurgerAnimating(!burgerAnimating)
		setTimeout(() => setBurgerHidden(!burgerHidden), burgerHidden ? 0 : 200)
	}

	useEffect(() => {
		const checkIfClickedOutside = (e: Event) => {
			if (
				burgerRef.current &&
				profileRef.current &&
				burgerRef.current !== e.target &&
				profileRef.current !== e.target
			) {
				setBurgerAnimating(true)
				setTimeout(() => setBurgerHidden(true), 200)
			}
		}
		document.addEventListener('click', checkIfClickedOutside)
		return () => {
			document.removeEventListener('click', checkIfClickedOutside)
		}
	}, [])

	return (
		<>
			<button className={'user-avatar'} onClick={() => menuClickHandler()}>
				<img
					src={avatar?.image}
					alt=''
					className={'user-avatar__img'}
					ref={profileRef}
				/>
			</button>
			{!burgerHidden && (
				<motion.div
					className={clsx(styles.burger, isWhite ? styles.white : null)}
					initial={{ height: 0, padding: 0 }}
					ref={burgerRef}
					animate={
						burgerAnimating
							? {
									height: 0,
									padding: 0,
									transition: { duration: 0.2 }
							  }
							: { height: 140, padding: '30px 40px' }
					}
					exit={{ height: 0, padding: 0 }}
					transition={{ duration: 0.3 }}
				>
					<ul className={styles.burger__btns}>
						<li>
							<button
								className={clsx(styles.burger__btn, styles.btn_1)}
								onClick={() =>
									navigate(Links.profile, {
										state: { from: location.pathname }
									})
								}
							>
								Профиль
							</button>
						</li>
						<li>
							<button
								className={clsx(styles.burger__btn, styles.btn2)}
								onClick={() => {
									logout()
									navigate(Links.auth)
								}}
							>
								Выйти
							</button>
						</li>
					</ul>
				</motion.div>
			)}
		</>
	)
}

export default ProfileMenu
