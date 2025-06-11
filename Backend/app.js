import express from 'express'
import cors from 'cors'
import authRoute from './src/routes/authRoutes.js'
import userRoute from './src/routes/userRoute.js'
import messageRoute from './src/routes/messageRoute.js'
import cookieParser from 'cookie-parser'

const app=express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:'http://localhost:5174',
    credentials:true,
}))


app.use('/api/auth',authRoute)

app.use('/api/user',userRoute)

app.use('/api/message',messageRoute)


export default app;