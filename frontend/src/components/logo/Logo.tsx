import React from 'react'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import './logo.css'

const Logo = () => {
	return (
		<Link to={'/main'} className='logo'>
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
