import express from 'express';
import app from './app.js'
const port = 8080;

app.listen(port, () => {
    console.log(`Tutorial app listneing on port ${port}...`);
});
