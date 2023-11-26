import React from 'react'
import AuthorAvatar from '../../../../assets/images/Avatar.jpg'
import './review.css'
import type IReview from '../../../../models/IReview'

function ReviewItem({ review }: { review: IReview }) {
	return (
		<li className='review'>
			<div className='review__author'>
				<img
					className='review__author__avatar'
					src={AuthorAvatar}
					alt='Аватар автора'
					width='1024'
					height='1024'
				/>
				<h3 className='review__author__name'>{review.author}</h3>
			</div>
			<p className='review__text'>{review.text}</p>
		</li>
	)
}

export default React.memo(ReviewItem)
