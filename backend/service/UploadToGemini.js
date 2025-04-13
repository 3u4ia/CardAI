const chat = require('../server');

const uploadFile = async (body) => {
    console.log(body);

    const { imageArray } = body;

    const imageParts = body.map(file => ({
        inlineData: {
            data: file.buffer.toString('base64'),
            mimeType: file.mimeType
        }
    }));

    const promptParts = [
        {
            text: "Give a small notecard summary of these images",
            ...imageParts
        }
    ]
}