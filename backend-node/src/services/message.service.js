export default class messageService {
    static processMessage(message) {
        const result = {
            "success": true,
            "receivedMessage": message,

        }

        return result
    }
}