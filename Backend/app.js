import express from 'express'
import { app,server}from './src/socket/socket.js'
import cors from 'cors'
import authRoute from './src/routes/authRoutes.js'
import userRoute from './src/routes/userRoute.js'
import messageRoute from './src/routes/messageRoute.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
// import dbConnect from './src/dbConfig/dbConnect.js';

dotenv.config();
console.log(process.env.PORT,"jjj")
let PORT=process.env.PORT;

app.use(express.json()) 
app.use(cookieParser())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))


app.use('/api/auth',authRoute)

app.use('/api/user',userRoute)

app.use('/api/message',messageRoute)

server.listen(PORT,()=>{
    dbConnect()
    console.log(`server is running on port:${PORT}`)
})