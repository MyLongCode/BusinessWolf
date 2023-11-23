import { motion } from 'framer-motion'
import React, { useState } from 'react'
import avatar from '../../assets/images/Avatar.jpg'
import './profileMenu.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

const ProfileMenu = () => {
	const [burgerHidden, setBurgerHidden] = useState(true)
	const [burgerAnimating, setBurgerAnimating] = useState(true)
	const navigate = useNavigate()
	const location = useLocation()
	const { logout } = useActions()

	const menuClickHandler = () => {
		setBurgerAnimating(!burgerAnimating)
		setTimeout(() => setBurgerHidden(!burgerHidden), burgerHidden ? 0 : 250)
	}

	return (
		<>
			<button className='user-avatar' onClick={() => menuClickHandler()}>
				<img
					src={avatar}
					alt='Аватар пользователя'
					className='user-avatar__img'
				/>
			</button>
			{!burgerHidden && (
				<motion.div
					className='burger'
					initial={{ height: 0, padding: 0 }}
					animate={
						burgerAnimating
							? {
									height: 0,
									padding: 0
							  }
							: { height: 140, padding: '30px 40px' }
					}
					transition={{ duration: 0.3 }}
				>
					<ul className='burger__btns'>
						<li className='burger__item'>
							<button
								className='burger__btn btn-1'
								onClick={() =>
									navigate('/profile', { state: { from: location.pathname } })
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
									navigate('/authorization')
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
