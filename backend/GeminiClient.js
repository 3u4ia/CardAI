import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';


console.log("Instantiated GoogleGenAI");
export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});



export default ai;









// class Server {

//     static chat;
//     constructor(){
//         const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

//         chat = ai.chats.create({ model: "gemini-2.0-flash" })
//     }
// }






//module.exports = chat;






// console.log("chat response 1.text: ", response1.text);



