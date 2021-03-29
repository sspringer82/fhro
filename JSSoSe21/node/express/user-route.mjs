import express from 'express';
import userController from './user-controller.mjs':

const userRouter = express.Router();

userRouter.get('/', userController.getOne);
userRouter.post('/', (req, res) => res.json('foo'));
userRouter.put('/', (req, res) => res.json('foo'));
userRouter.delete('/', (req, res) => res.json('foo'));

export userRouter;
