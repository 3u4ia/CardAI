import mime from 'mime-types';
import fs from 'fs'
import ai from '../GeminiClient.js';

export const uploadFile = async (files) => {
    if (!files || files.length === 0) {
        return response.status(400).json({ error: 'No files uploaded' });
    }

    // Turns a path and a mimeType and makes it a inlineData json object
    const fileToGenerativePart = (buffer, mimeType) => {
        console.log("Buffer: ", buffer);
        return {
            inlineData: {
                data: buffer.toString('base64'),
                mimeType
            }
        }
    }



    // maps the body array of json file paths tto turn it into an array of inlineData json's
    const inlineDataArray = files.map((file) => fileToGenerativePart(file.buffer, file.mimetype));



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
    const formattedResponseString = response1.text.substring(7, response1.text.length - 3)

    try {
        const parsed = JSON.parse(formattedResponseString);
        return parsed;
    } catch (err) {
        console.error("Not vlid JSON: ", err);
        throw new Error("Gemini did not return valid JSON");
    }
};