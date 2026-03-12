import { GoogleGenAI } from "@google/genai";

export default async function askAi(data, doctorData) {
  try {
    const apiKey = import.meta.env.VITE_GENAI_API_KEY || "";
    
    if (!apiKey) {
      throw new Error("Gemini API Key is missing. Please check your .env file.");
    }

    const aiClient = new GoogleGenAI(apiKey);
    const model = aiClient.getGenerativeModel({ 
      model: "gemini-2.0-flash",
    });

    const prompt = `
YOU ARE AN EXPERT MEDICAL ASSISTANT WITH A CLEAR GOAL TO SUGGEST THE RIGHT DOCTOR BY REVIEWING THE PATIENT'S DESCRIPTION AND THEIR SYMPTOMS.

YOU HAVE TO ANALYZE THE DOCTORS LIST IN THE FOLLOWING FORMAT:
${doctorData}

YOU MUST FOLLOW THE RESPONSE FORMAT STRICTLY:
{
  "id": "DOCTOR_ID"
}

IN THE RESPONSE, ONLY RETURN THE DOCTOR ID IN A VALID JSON FORMAT.
DO NOT ADD COMMENTS, EXTRA SPACES, BRACKETS, OR ANY OTHER CHARACTERS.

THE PATIENT DESCRIPTION IS AS FOLLOWS:
{
  "name": "${data.name}",
  "age": "${data.age}",
  "gender": "${data.gender}",
  "descOfProblem": "${data.descOfProblem}"
}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    

    const cleanedText = text.replace(/```json|```/g, "").trim();
    
    console.log("AI Response:", cleanedText);
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("AI Error:", error);
    
    if (error.message === "GENAI_API_KEY_MISSING") {
      throw new Error("Gemini API Key is missing. Please check your .env file.");
    }
    
    if (error.status === 429) {
      throw new Error("Rate limit exceeded. Please try again after a minute.");
    }

    if (error.status === 401 || error.status === 403) {
      throw new Error("Invalid Gemini API Key. Please verify your credentials.");
    }

    throw new Error(error.message || "Failed to connect to AI Specialist. Please try again later.");
  }
}
