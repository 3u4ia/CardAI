import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';



export const makeInstance = () => {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

    return ai.chats.create({ model: "gemini-2.0-flash" })

}






//module.exports = chat;




// const response1 = await chat.sendMessage({
//     message: "Tell me about dogs",
// })

// console.log("chat response 1.text: ", response1.text);



