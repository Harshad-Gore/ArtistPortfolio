import { createServer } from 'http';
import express from 'express';
import { registerRoutes } from '../server/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
const server = await registerRoutes(app);

export default app;
