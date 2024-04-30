import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY , // This is the default and can be omitted
});

function buildPrompt(message:string){
    const prompt = `${message}`
    return prompt
}

export async function getResponse(message:string,model:string) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{"role":"system","content":"Respond in the same manner you usually do."},
    {"role":"user","content":buildPrompt(message)}],
    model: model,
  });
  return chatCompletion.choices[0].message.content;
}