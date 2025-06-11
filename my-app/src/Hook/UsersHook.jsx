import { useEffect, useState } from "react";
import { axiosInstance } from "../axiosInstance";

export function useAllUsers(){
    const[loading,setLoading]=useState(false)
    const[data,setData]=useState([])

    const Allusers=async()=>{
        setLoading(true)
        try {
            const res=await axiosInstance.get('/user/getUsers')
            setData(res.data.users)

        } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }

    }
        useEffect(()=>{
            Allusers()
        },[])
    return{loading,Allusers,data}
}