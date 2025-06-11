import express from 'express'
import { getUser } from '../controler/userControler.js'
import { protect } from '../middleWare/authMiddleware.js'

const  userRoute=express()


userRoute.get('/getUsers',protect,getUser)


export default userRoute