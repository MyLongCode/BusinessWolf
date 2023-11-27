import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import avatar from '../../../assets/images/Avatar.jpg'
import './profileMenu.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import Links from '../../../config/links.config'

const ProfileMenu = () => {
	const [burgerHidden, setBurgerHidden] = useState(true)
	const [burgerAnimating, setBurgerAnimating] = useState(true)
	const navigate = useNavigate()
	const location = useLocation()
	const { logout } = useActions()
	const burgerRef = useRef(null)
	const profileRef = useRef(null)

	const menuClickHandler = () => {
		setBurgerAnimating(!burgerAnimating)
		setTimeout(() => setBurgerHidden(!burgerHidden), burgerHidden ? 0 : 250)
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
				setTimeout(() => setBurgerHidden(true), 250)
			}
		}
		document.addEventListener('click', checkIfClickedOutside)
		return () => {
			document.removeEventListener('click', checkIfClickedOutside)
		}
	}, [])

	return (
		<>
			<button className='user-avatar' onClick={() => menuClickHandler()}>
				<img
					src={avatar}
					alt='Аватар пользователя'
					className='user-avatar__img'
					ref={profileRef}
				/>
			</button>
			{!burgerHidden && (
				<motion.div
					className='burger'
					initial={{ height: 0, padding: 0 }}
					ref={burgerRef}
					animate={
						burgerAnimating
							? {
									height: 0,
									padding: 0
							  }
							: { height: 140, padding: '30px 40px' }
					}
					exit={{ height: 0, padding: 0 }}
					transition={{ duration: 0.3 }}
				>
					<ul className='burger__btns'>
						<li className='burger__item'>
							<button
								className='burger__btn btn-1'
								onClick={() =>
									navigate(Links.profile, {
										state: { from: location.pathname }
									})
								}
							>
								Профиль
							</button>
						</li>
						<li className='burger__item'>
							<button
								className='burger__btn btn-2'
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