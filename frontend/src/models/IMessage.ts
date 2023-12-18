export default interface IMessage {
	url: string
	text: string
	type: 'text' | 'video' | 'picture'
	author: 'course' | 'user'
}
