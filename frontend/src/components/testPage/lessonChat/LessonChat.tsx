import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Links from '../../../config/links.config'
import useLessons from '../../../hooks/useLessons'
import { LessonPageParams } from '../../../pages/lessonPage/lessonPage.types'
import LessonMessage from './lessonMessage/LessonMessage'

function LessonChat() {
	const { id, moduleID, courseID } = useParams<LessonPageParams>()
	const lesson = useLessons(id as string)
	const navigate = useNavigate()
	const [isPrinting, setIsPrinting] = useState(true)
	const btnRef = useRef<HTMLButtonElement>(null)

	const [messagesCount, setMessagesCount] = useState(1)
	const messagesList = useMemo(() => lesson?.chat_text?.list || [], [lesson])

	const buttonClickHandler = () => {
		if (messagesList.length > messagesCount) {
			setMessagesCount(prevState => prevState + 1)
		} else {
			navigate(Links.module(courseID, moduleID))
		}
	}

	useEffect(() => {
		const scroll = () => {
			if (btnRef.current) {
				btnRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
		if (
			messagesCount < messagesList?.length &&
			messagesList[messagesCount].author === 'admin' &&
			!isPrinting
		) {
			setIsPrinting(true)
			setMessagesCount(prevState => prevState + 1)
		}
		if (!isPrinting) {
			scroll()
		}
	}, [messagesCount, isPrinting])

	return (
		<div className='lesson-page__chat'>
			<ul className='lesson-page__messages'>
				{messagesList
					.map(message => {
						return (
							<LessonMessage
								key={messagesList.indexOf(message)}
								message={message}
								printingHandler={setIsPrinting}
							/>
						)
					})
					.slice(0, messagesCount)}
			</ul>
			{!isPrinting && (
				<button
					ref={btnRef}
					className='lesson-page__btn btn'
					onClick={() => buttonClickHandler()}
					style={
						messagesCount < lesson?.chat_text?.list.length
							? { textAlign: 'left', paddingLeft: 10 }
							: { textAlign: 'center', paddingLeft: 0, width: 600 }
					}
				>
					{messagesCount === lesson?.chat_text?.list.length
						? 'Прочитано'
						: messagesList[messagesCount]?.text}
				</button>
			)}
		</div>
	)
}

export default LessonChat
