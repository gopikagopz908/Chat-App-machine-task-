import express from 'express'
import { verifyToken } from '../../utils/generateToken.js'
import { getMessage, sendMessage } from '../controler/messageControler.js'
import { protect } from '../middleWare/authMiddleware.js'

const messageRoute=express()


messageRoute.post('/send/:id',protect,sendMessage),
messageRoute.get("/:id",protect,getMessage)

export default messageRoute;
