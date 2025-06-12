import express from 'express'
import { getUser,followUser,getFollowing,unfollowUser,getFollowers } from '../controler/userControler.js'
import { protect } from '../middleWare/authMiddleware.js'

const  userRoute=express()


userRoute.get('/getUsers',protect,getUser)

userRoute.post('/follow',protect,followUser)

userRoute.post('/unfollow',protect,unfollowUser)

userRoute.post('/following',protect,getFollowing)

userRoute.get('/followers',protect,getFollowers)


export default userRoute 