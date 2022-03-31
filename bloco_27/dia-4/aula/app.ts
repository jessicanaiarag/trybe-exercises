import express from 'express';
import UserController from '.controllers/UserController';

const app = express();

const.use(express.json());

app.post('/users', UserController.createUser);

export default app;