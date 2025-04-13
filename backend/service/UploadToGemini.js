import {makeInstance} from '../server.js'
import fs from 'fs'

export const uploadFile = async (body) => {
    console.log(body);
    const fileData = fs.readFileSync(body[0].path);
    const base64 = fileData.toString;
    console.log("FileData: ", fileData)
    console.log("Base64:", base64)

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