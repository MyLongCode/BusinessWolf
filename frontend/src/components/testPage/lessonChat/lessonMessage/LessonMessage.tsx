import { clsx } from 'clsx'
import React from 'react'
import LessonMessageConfig from '../../../../config/lessonMessage.config'
import type IMessage from '../../../../models/IMessage'
import './lessonMessage.css'

function LessonMessage({ message }: { message: IMessage }) {
	return (
		<li
			className={clsx('message', {
				message_user: message.author === 'user',
				message_admin: message.author === 'admin'
			})}
		>
			{message.type !== 'text' && (
				<div className='message__attachment'>
					{message.type === 'picture' ? (
						<img src={message.url} alt='Вложение' />
					) : (
						<iframe
							width={LessonMessageConfig.videoWidth}
							height={LessonMessageConfig.videoHeight}
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
