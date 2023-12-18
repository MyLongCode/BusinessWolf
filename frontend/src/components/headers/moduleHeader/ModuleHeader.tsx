import React, { useEffect, useState } from 'react'
import ProfileMenu from '../../profilePage/profileMenu/ProfileMenu'
import Logo from '../logo/Logo'
import './moduleHeader.css'

interface ModuleHeaderProps {
	title: string
	description?: string
}

function ModuleHeader(props: ModuleHeaderProps) {
	const [title, setTitle] = useState('')

	useEffect(() => {
		setTitle(props.title)
	}, [props.title])

	return (
		<header className='module-header header'>
			<div className='header__wrapper'>
				<Logo />
				<ProfileMenu isWhite={true} />
			</div>
			<div className='header__module hm'>
				<h2 className='hm__name'>{title}</h2>
				{props.description && <p className='hm_desc'>{props.description}</p>}
			</div>
		</header>
	)
}

export default React.memo(ModuleHeader)
