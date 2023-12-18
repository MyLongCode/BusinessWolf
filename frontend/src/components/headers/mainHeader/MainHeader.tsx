import React from 'react'
import useUserData from '../../../hooks/useUserData'
import ProfileMenu from '../../profilePage/profileMenu/ProfileMenu'
import Coins from '../coins/Coins'
import Logo from '../logo/Logo'
import './mainHeader.css'

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
