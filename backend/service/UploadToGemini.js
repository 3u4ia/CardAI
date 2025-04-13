import {makeInstance} from '../server.js'
import mime from 'mime-types';
import fs from 'fs'

export const uploadFile = async (body) => {
    console.log(body);
    const fileData = fs.readFileSync(body[0].path);
    const mimeType = mime.lookup(body[0].path)
    const base64 = fileData.toString;
    console.log("FileData: ", fileData)
    console.log("Base64:", base64);
    console.log(mimeType)
    

    const imageParts = {
        inlineData: {
            data: base64,
            mimeType: mimeType,
        }
    }
    
    const chat = makeInstance();
    const response1 = await chat.generateContent({
        contents: [
            "Make flashcards for this set of notes and structure them in json under the format [ {'question':question, 'answer':answer } ]",
            imageParts
        ]

    });
    console.log(response1);



    // const { imageArray } = body;

    // const imageParts = body.map(file => ({
    //     inlineData: {
    //         data: file.buffer.toString('base64'),
    //         mimeType: file.mimeType
    //     }
    // }));

    // const promptParts = [
    //     {
    //         text: "Give a small notecard summary of these images",
    //         ...imageParts
    //     }
    // ]
}