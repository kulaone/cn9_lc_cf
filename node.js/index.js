import functions from "@google-cloud/functions-framework";
import { GoogleVertexAI } from "langchain/llms/googlevertexai";

const llm = new GoogleVertexAI();

functions.http('helloHttp',async (req, res) => {
  let question = req.query.question || req.body.question || 'hi';
  const answer = await llm.call(question);
  res.send(answer);
});