"use client";
import { ChatGPTAPI } from "@/api/chatGPT/index";

const chatGPTFetch = async () => {
  const prompt = "과일 10개만 알려줘";
  await ChatGPTAPI(prompt)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("error");
    });
};

const TestButton = () => {
  return (
    <>
      <button onClick={chatGPTFetch}>Test Button</button>
    </>
  );
};

export default TestButton;
