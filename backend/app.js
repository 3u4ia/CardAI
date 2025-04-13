import express from 'express';
const app = express();
import cors from 'cors'
import {uploadFile} from './service/UploadToGemini.js';
const port = 8080;

app.use(cors());
app.use(express.json());

app.use(
    (request, response, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
)


app.post("/something", (req, res) => {
    const thingy = req.body
    uploadFile(req.body);


    .catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            })
    })
});



app.listen(port, () => {
    console.log(`Tutorial app listneing on port ${port}...`);
})
