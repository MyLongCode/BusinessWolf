import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/Logo.svg'
import Links from '../../../config/links.config'
import './logo.css'

const Logo = () => {
	return (
		<Link to={Links.main} className='logo'>
			<img src={logo} alt='Логотип' className='logo__img' />
			<p className='logo__text'>
				Бизнес
				<br />
				волчонок
			</p>
		</Link>
	)
}

export default Logo
