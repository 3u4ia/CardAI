import express from 'express';
const app = express();
import cors from 'cors'
import multer from 'multer';
import {uploadFile} from './service/UploadToGemini.js';
const port = 8080;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use((req, res, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
)


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

app.listen(port, () => {
    console.log(`Tutorial app listneing on port ${port}...`);
});