import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai"
import similarity from "compute-cosine-similarity"; // cosine similarity tells how much 2 vectors are similar by comparing the angle between them.

const embedding = new GoogleGenerativeAIEmbeddings({
    model: 'gemini-embedding-2',
    outputDimensionaliy: 300  // default dimension for this model is 3072
})

const documents = [
    "Virat Kohli is one of the greatest modern batsmen and has scored more than 13,000 ODI runs for India.",
    "MS Dhoni is known for his exceptional captaincy, calm decision making, and finishing abilities in limited-overs cricket.",
    "Sachin Tendulkar, often called the God of Cricket, holds the record for 100 international centuries.",
    "Jasprit Bumrah is India's premier fast bowler, renowned for his unique action and deadly yorkers in all formats.",
    "Rohit Sharma is famous for his elegant batting style and holds the record for the highest individual ODI score of 264 runs."
];

// const query = 'What cricketer is known for yorkers?'
// const query = 'Which cricketer is compared with god?'
const query = 'Which cricket hit six sixes against england?'


// Generate vectors for document and user query 
const doc_embeddings = await embedding.embedDocuments(documents);
const query_embeddings = await embedding.embedQuery(query);

// console.log(doc_embeddings,query_embeddings,typeof doc_embeddings, typeof query_embeddings)

// calculate similarity score between query vector and document vector and pick the highest score 
const scores = doc_embeddings.map((item,index) => {
    return [index,similarity(query_embeddings,item)]
}).sort((a,b) => b[1] - a[1])

const [index,score] = scores[0];

console.log(`${query} semantic search match is "${documents[index]}" and matching score is ${score}`)