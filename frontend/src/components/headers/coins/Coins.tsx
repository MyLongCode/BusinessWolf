import React from 'react'
import token from 'assets/images/Token_wolf.svg'
import './coins.css'

function Coins({ coins }: { coins: number }) {
	return (
		<div className='coins'>
			<img src={token} alt='Монеты' className='coins__img' />
			<p className='coins__count'>{coins}</p>
		</div>
	)
}

export default Coins
