import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';



const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const chat = ai.chats.create({ model: "gemini-2.0-flash" })





module.exports = chat;



// const response1 = await chat.sendMessage({
//     message: "Tell me about dogs",
// })

// console.log("chat response 1.text: ", response1.text);



