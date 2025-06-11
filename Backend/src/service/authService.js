import CustomError from "../../utils/customError.js"
import bcrypt from 'bcryptjs'
import User from "../model/authModel.js"

export const registerService=async(data)=>{
   const{firstName,lastName,email,password}=data
  
   const userExists=await  User.findOne({email})

   if(userExists){
    throw new CustomError("user already registred",400)
   }
  
   const hashedPassword=await bcrypt.hash(password,8)

   const newUser=new User({
     firstName,
     lastName,
     email,
     password:hashedPassword
   })

   const savedUser=await newUser.save()

   return savedUser
    

}


export const loginService=async(data)=>{
  const{email,password}=data

  const user=await User.findOne({email})

  if(!user){
    throw new CustomError("please create an account",400)
  }
      const match = await bcrypt.compare(password, user.password);

      if(!match){
        throw new CustomError("invalid password")
      }
  return user;
}

