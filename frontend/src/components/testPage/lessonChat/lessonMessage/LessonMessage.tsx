import React from 'react'
import './lessonMessage.css'
import type IMessage from '../../../../models/IMessage'

function LessonMessage({ message }: { message: IMessage }) {
	return (
		<li
			className={`message${
				message.author === 'user' ? ' message_user' : ' message_not-user'
			}`}
		>
			{message.type !== 'text' && (
				<div className='message__attachment'>
					{message.type === 'picture' ? (
						<img src={message.url} alt='Вложение' />
					) : (
						<iframe
							width='600'
							height='340'
							src={message.url}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					)}
				</div>
			)}
			<p
				className='message__text'
				style={
					message.type !== 'text'
						? { paddingBottom: '12px', paddingTop: '5px' }
						: {}
				}
			>
				{message.text}
			</p>
		</li>
	)
}

export default React.memo(LessonMessage)
