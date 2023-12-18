import { clsx } from 'clsx'
import { useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import LessonMessageConfig from '../../../../config/lessonMessage.config'
import type IMessage from '../../../../models/IMessage'
import './lessonMessage.css'

const printDuration = 1400

function LessonMessage({
	message,
	printingHandler
}: {
	message: IMessage
	printingHandler: (state: boolean) => void
}) {
	const [isPrinting, setIsPrinting] = useState(true)

	useEffect(() => {
		printingHandler(true)

		const donePrinting = () => {
			setIsPrinting(false)
			printingHandler(false)
		}
		if (message.author === 'course') {
			setTimeout(() => donePrinting(), printDuration)
		} else {
			donePrinting()
		}
	}, [])

	return (
		<li
			className={clsx('message', {
				message_user: message.author === 'user',
				message_admin: message.author === 'course'
			})}
		>
			{message.type !== 'text' && !isPrinting && (
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
				style={message.type !== 'text' ? { paddingBottom: '12px', paddingTop: '5px' } : {}}
			>
				{isPrinting ? '...' : message.text}
			</p>
		</li>
	)
}

export default React.memo(LessonMessage)
