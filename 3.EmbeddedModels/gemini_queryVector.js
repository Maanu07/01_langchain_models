import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai"

const embedding = new GoogleGenerativeAIEmbeddings({
    model:'gemini-embedding-2',
    // outputDimensionality:32   // default dimension for this model is 3072
})

const vector = await embedding.embedQuery('This is a good day to be alive.');

// vector is an array of length dimension

console.log(vector,vector.length)