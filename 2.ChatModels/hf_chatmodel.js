// Method 1 using ChatOpenAI class since open AI  and HF share similar API format

// import { ChatOpenAI } from "@langchain/openai"

// // LangChain JS has no ChatHuggingFace package (that exists only in Python).
// // Hugging Face Inference Providers expose an OpenAI-compatible API, so ChatOpenAI
// // is the supported way to call HF chat models from JavaScript.
// // Docs: https://huggingface.co/docs/inference-providers
// //       https://docs.langchain.com/oss/javascript/integrations/chat/openai
// const model = new ChatOpenAI({
//     // Only models listed at https://huggingface.co/inference/models work here.
//     // TinyLlama/TinyLlama-1.1B-Chat-v1.0 is on the Hub but has no Inference Provider, so the router returns 400.
//     model: "TinyLlama/TinyLlama-1.1B-Chat-v1.0",
//     temperature: 0,
//     maxRetries: 2,
//     apiKey: process.env.HF_TOKEN,
//     configuration: {
//         baseURL: "https://router.huggingface.co/v1",
//     },
// })

// const aiMsg = await model.invoke([
//     [
//         "system",
//         "You are a professional english poet. Write a short poem in 5-6 lines on the topic user says.",
//     ],
//     ["human", "I am a shy guy"],
// ])
// console.log(aiMsg)




// Method 2 using HF ( hugging face ) inference API

import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

const chatCompletion = await client.chatCompletion({
  model: "openai/gpt-oss-120b:fastest",
  messages: [
    {
      role: "user",
      content: "How many 'G's in 'huggingface'?",
    },
  ],
});

console.log(chatCompletion.choices[0].message);