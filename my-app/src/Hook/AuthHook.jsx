import { useState } from "react";
import { axiosInstance } from "../axiosInstance";
import {useNavigate} from 'react-router-dom'
export function useRegister(){
    const navigate=useNavigate()
    const[loading,setLoading]=useState(false)

    const Register=async(formData)=>{
        setLoading(true)
     try {
        
         const data=await axiosInstance.post('/auth/register',formData)
           if(data.status==200){
             navigate('/login')
  }
        console.log(data,"dataaa")
     } catch (error) {
        console.log(error)
        
     }finally{
        setLoading(false)
     }
       
    }

    return{loading,Register}

}


export function useLogin(){
    const navigate=useNavigate()
    const[loading,setLoading]=useState(false)

    const Login=async(data)=>{
        setLoading(true)
        try {
            const datas=await axiosInstance.post('/auth/login',data)
            console.log(datas)
            if(datas.status===200){
                navigate('/home')
            }
        } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }
    }
    return{loading,Login}
}
