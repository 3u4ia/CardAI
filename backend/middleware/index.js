import express from 'express'
import cors from 'cors'
import multer from 'multer';

// Makes it so that express can parse JSON
export const registerMiddleWare = (app) => {
    app.use(express.json());
    app.use(cors());

    // If that grows you could put that in a logger.js inside of the middleware file
    app.use((req, res, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
)
}


const storage = multer.memoryStorage();

export const upload = multer({ storage: storage });