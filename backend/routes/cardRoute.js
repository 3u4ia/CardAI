import express from 'express'
import {upload} from '../middleware/index.js';
import { uploadFile } from '../service/UploadToGemini.js';



export const routing = (app) => {
    app.post("/upload", upload.array("files"), async (req, res) => {
        try {
            console.log("Uploaded files:", req.files);
            
    
            const flashcards = await uploadFile(req.files);
            res.status(200).json({ flashcards });
        } catch (error) {
            console.error("Upload error:", error);
            res.status(500).json({ message: "Upload failed" });
        }
    });
}