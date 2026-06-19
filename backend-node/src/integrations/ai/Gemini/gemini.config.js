import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY não configurada")
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default async function GeminiResponse(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${prompt}`,
  });
  console.log(response.text);
}
