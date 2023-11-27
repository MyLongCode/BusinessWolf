import type IAuthInputs from 'models/IAuthInputs'
import AuthForm from 'components/authForm/AuthForm'
import { motion } from 'framer-motion'
import logo from 'assets/images/Logo.svg'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import Links from '../../config/links.config'
import './authorizationPage.css'

function AuthorizationPage() {
	const navigate = useNavigate()
	const location = useLocation()
	const { user } = useTypedSelector(state => state.auth)
	const { login, checkAuth } = useActions()

	useEffect(() => {
		if (user) {
			navigate(location.state?.from?.pathname || Links.main, {
				replace: true
			})
		}
		// eslint-disable-next-line
	}, [user])

	useEffect(() => {
		if (localStorage.getItem('refresh_token')) {
			checkAuth()
		}
		// eslint-disable-next-line
	}, [])

	const onSubmit = async (data: IAuthInputs) => {
		login({ username: data.username, password: data.password })
	}

	return (
		<motion.div
			className='auth centered'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<img src={logo} alt='Логотип' className='auth__logo' />
			<h1 className='auth__heading'>Бизнес волчонок</h1>
			<AuthForm onSubmit={onSubmit} />
		</motion.div>
	)
}

export default AuthorizationPage
