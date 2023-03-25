import { openai, handleSuccess, handleError } from "../index";

export const ChatGPTAPI = async (prompt: string): Promise<string> => {
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 4000,
    temperature: 0,
  });
};
