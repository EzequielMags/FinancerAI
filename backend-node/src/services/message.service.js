import AIService from "../integrations/ai/ai.service.js"

export default class messageService {
    static async processMessage(message) {
        console.log(message)
        const transaction = await AIService.interpretFinancialMessage(message)
       

        return {
            "success": true,
            transaction
        }
    }

}