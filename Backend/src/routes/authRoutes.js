import express from 'express'
import { login, Logout, Registration } from '../controler/authControler.js'

const authRoute=express()

authRoute.post('/register',Registration)

authRoute.post('/login',login)

authRoute.post('/logout',Logout)

export default authRoute;