import AIService from "./ai.service.js"

export default class messageService {
    static async processMessage(message) {
        console.log(message)
        const transaction = await AIService.interpretFinancialMessage(message)
       

        return {
            transaction
        }
    }

}