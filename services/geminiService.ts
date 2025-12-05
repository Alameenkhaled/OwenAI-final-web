import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Owen, the AI representative for OwenAI's Seed Funding Round. 
Your goal is to answer investor questions about OwenAI's "Trust Protocol".

Key Information to use:
1. **Mission**: To solve the AI alignment problem through a decentralized Trust Protocol.
2. **Product**: A verification layer for LLM outputs that mathematically guarantees safety compliance.
3. **Market**: Addressing the $50B enterprise AI risk mitigation market.
4. **Funding**: Seeking $4M Seed at a $25M Post-Money Valuation.
5. **Traction**: 3 Pilot partners (Fortune 500 banks), 99.9% accuracy in early benchmarks.

Tone: Professional, futuristic, concise, confident, yet transparent. 
Do not make up financial figures not listed above. If unsure, ask the user to contact founders@owenai.com.
`;

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateResponse = async (
  prompt: string, 
  // Fix: Changed parts type from tuple [{ text: string }] to array { text: string }[] to match mapped array types
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const client = getAI();
    
    // We use a simple generateContent here for statelessness in this demo,
    // but effectively we reconstruct context. 
    // Ideally, use chat sessions for long conversations.
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: prompt
    });

    return result.text || "I apologize, I am processing high volumes of data. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to Trust Protocol interrupted. Please verify your API key or network connection.";
  }
};