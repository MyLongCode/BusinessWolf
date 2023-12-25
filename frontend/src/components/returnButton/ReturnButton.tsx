import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './retunButton.css'

const ReturnButton = ({ text, to }: { text: string; to?: string }) => {
	const location = useLocation()

	return (
		<Link to={to || location.state?.from || -1} replace className='return-btn'>
			<span className='return-btn__arrow arrow' />
			<p className='return-btn__text'>{text}</p>
		</Link>
	)
}

export default ReturnButton
