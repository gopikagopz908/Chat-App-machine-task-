import express from 'express'
import { getUser } from '../controler/userControler.js'

const  userRoute=express()


userRoute.get('/getUsers',getUser)


export default userRoute