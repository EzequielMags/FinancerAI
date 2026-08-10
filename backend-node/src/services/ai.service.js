import GeminiResponse from "../integrations/ai/Gemini/gemini.config.js";
import { FINANCIAL_PROMPT } from "../integrations/ai/prompts/financial.prompt.js";

export default class AIService {
    static async interpretFinancialMessage(message) {

        const prompt = `${FINANCIAL_PROMPT} MENSAGEM: ${message}`
        const responseAI = await GeminiResponse(prompt)
        return responseAI
       }
}