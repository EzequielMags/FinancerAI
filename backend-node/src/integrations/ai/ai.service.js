import GeminiResponse from "./Gemini/gemini.config.js";
import { FINANCIAL_PROMPT } from "./prompts/financial.prompt.js";

export default class AIService {
    static async interpretFinancialMessage(message) {

        const prompt = `${FINANCIAL_PROMPT} MENSAGEM: ${message}`
        const responseAI = await GeminiResponse(prompt)
       }
}