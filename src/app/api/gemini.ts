const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINIAPI_KEY);

function buildPrompt(message:string){
    const prompt = `${message}`
    return prompt
}

export async function getResponse(message:string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = buildPrompt(message);
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

getResponse("Hey there!");
