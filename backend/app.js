const express = require ('express');
const app = express();
const UploadToGemini = require('./UploadToGemini');
const port = 8080;

router.post((req, res, next) => {
    const thingy = req.body.username
    UploadToGemini(thingy);
})


app.listen(port, () => {
    console.log(`Tutorial app listening on port ${port}...`);
})
