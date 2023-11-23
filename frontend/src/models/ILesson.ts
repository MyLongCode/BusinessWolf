import IMessage from './IMessage'

export default interface ILesson {
	lesson_id: number
	number: number
	chat_text: {
		list: IMessage[]
	}
	name: string
	description: string
	duration: number
	module: number
}
