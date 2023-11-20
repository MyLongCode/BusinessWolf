export default interface IMessage {
    id: number
    number: number
    text: string,
    isUser: boolean,
    attachmentType: "image" | "video" | ""
    attachment: string
}