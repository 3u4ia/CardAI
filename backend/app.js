import express from 'express';
import { registerMiddleWare } from './middleware/index.js';
import { routing } from './routes/cardRoute.js';

const port = 8080;
const app = express();



// Gets the json parsing and cors thing out of the way eventually the gemini stuff will be there too
registerMiddleWare(app);

routing(app);

export default app;