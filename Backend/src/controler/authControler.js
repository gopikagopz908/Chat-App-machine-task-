import CustomError from "../../utils/customError.js";
import { generateToken } from "../../utils/generateToken.js";
import asyncHandler from "../middleWare/asyncHandler.js";
import { loginService, registerService } from "../service/authService.js";

export const Registration=asyncHandler(async(req,res)=>{
    const data=req.body;
    console.log(req.body,'jjjj')

    const  registerUser=await registerService(data)
     const token=generateToken(registerUser._id)

  res.cookie('token',token, { httpOnly: true, secure: false, maxAge: 3 * 24 * 60 * 60 * 1000, path: '/' })

    return res.status(200).json({
        message:"user Registred successfully",
        registerUser,
        token
    })
})

export const login=asyncHandler(async(req,res)=>{
    const data=req.body;

    if(!data){
        throw new CustomError("data not found",404)
    }

    const user=await loginService(data)
    
    const token=generateToken(user._id)

  res.cookie('token',token, { httpOnly: true, secure: false, maxAge: 3 * 24 * 60 * 60 * 1000, path: '/' })

  return res.status(200).json({
    message:"user Logined successfully",
    user,
    token
  })

})


export const Logout = asyncHandler(async (req, res) => {
  // Clear the JWT cookie
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: 'Logged out successfully',
  });
});
