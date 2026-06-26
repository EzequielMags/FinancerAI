import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY não configurada")
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default async function GeminiResponse(prompt) {
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `${prompt}`,
    });
    return JSON.parse(response.text)
    
  } catch (error) {
      throw new Error("Erro ao comunicar com a IA")
  }
}
