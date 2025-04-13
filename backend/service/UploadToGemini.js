import mime from 'mime-types';
import fs from 'fs'
import ai from '../GeminiClient.js';

export const uploadFile = async (request, response) => {

    // Turns a path and a mimeType and makes it a inlineData json object
    const fileToGenerativePart = (path, mimeType) => {
        return {
            inlineData: {
                data: Buffer.from(fs.readFileSync(path)).toString('base64'),
                mimeType: mimeType
            }
        }
    }



    // maps the body array of json file paths tto turn it into an array of inlineData json's
    const inlineDataArray = request.body.map((file) => fileToGenerativePart(file.path, mime.lookup(file.path)));
    


    // Sends the prompt along with the images to gemini AI to send something
    const response1 = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
            "Make flashcards for this set of notes and structure them in json under the format [ {'question':question, 'answer':answer } ]",
            ...inlineDataArray
        ]

    });

    // gets the substring of the text to not include the ```json ``` formatting
    //  that gemini uses to let the user know what language their doing something in 
    const formattedResponseString = response1.text.substring(7, response1.text.length-3)
    
    let parsed;
    try {
        parsed = JSON.parse(formattedResponseString);
    } catch (err) {
        console.error("Not vlid JSON: ", err);
        return response.status(500).json({error: "Gemini did not return valid JSON"});
    }

    return response.status(200).json({
        flashcards: parsed
    })


}