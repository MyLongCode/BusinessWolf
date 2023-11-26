import React from 'react'
import './mainHeader.css'
import Coins from '../coins/Coins'
import useUserData from '../../../hooks/useUserData'
import Logo from '../logo/Logo'
import ProfileMenu from '../../profilePage/profileMenu/ProfileMenu'

function MainHeader() {
	const { coins } = useUserData()

	return (
		<header className='main-header header'>
			<div className='header__nav'>
				<Logo />
				<Coins coins={coins} />
				<ProfileMenu />
			</div>
		</header>
	)
}

export default React.memo(MainHeader)
