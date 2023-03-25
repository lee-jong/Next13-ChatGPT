import axios from "axios";

export const commonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3 * 1000,
});

const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const apiKey = ""; // key 조심!
const configuration = new Configuration({
  organization: "",
  apiKey,
});
export const openai = new OpenAIApi(configuration);

export const handleError = (err: any) => {
  let error = {};

  if (err && err.response && err.response.data) {
    error = err.response.data;
  } else {
    error = err;
  }

  return Promise.reject(error);
};

export const handleSuccess = (res: any) => res.data;
