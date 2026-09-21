import { ChatGoogleGenerativeAI } from "@langchain/google-genai"


// Instantiation
const model = new ChatGoogleGenerativeAI({
    model: "gemini-3.8-flash",
    temperature: 0,
    maxRetries: 2,
    apiKey: process.env.GOOGLE_API_KEY
    // other params...
})

// Invocation 

// const aiMsg = await model.invoke([
//     [
//         "system",
//         "You are a helpful assistant that translates English to French. Translate the user sentence.",
//     ],
//     ["human", "I love programming."],
// ])
const aiMsg = await model.invoke([
    [
        "system",
        "You are a professional english poet. Write a short poem in 5-6 lines on the topic user says.",
    ],
    ["human", "I am a shy guy"],
])
console.log(aiMsg)