import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai"

const embedding = new GoogleGenerativeAIEmbeddings({
    model:'gemini-embedding-2',
    outputDimensionality:32
})

const documents = [
    'This is a good day to be alive',
    'The TinyLlama project aims to pretrain a 1.1B Llama model on 3 trillion tokens.',
    'Hugging Face is way more fun with friends and colleagues!'
]

const result = await embedding.embedDocuments(documents)

console.log(result,result.length)