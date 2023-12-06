import { motion } from 'framer-motion'
import wolf_festive from 'assets/images/Festive_wolf(shadow).png'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Links from '../../config/links.config'
import './startPage.css'

function StartPage() {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			navigate(Links.main)
		}
	}, [navigate])

	return (
		<motion.div
			className='start centered'
			initial={{ gap: '150px', opacity: 0 }}
			animate={{ gap: '0px', opacity: 1, transition: { duration: 1.5 } }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='start__container-left'>
				<h1 className='start__title'>Добро пожаловать</h1>
				<p className='start__text'>
					нажмите начать, чтобы погрузиться <br /> в новый мир
				</p>
				<Link to='/authorization' className='start__link btn'>
					Начать
				</Link>
			</div>
			<img
				src={wolf_festive}
				alt='Волчонок'
				width='3000'
				height='3500'
				className='start__img'
			/>
		</motion.div>
	)
}

export default StartPage
