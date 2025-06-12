import { useEffect, useState } from "react";
import { axiosInstance } from "../axiosInstance";
import {useFollowContext} from '../context/FollowContext'
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



export function useFollowUser(){
    const[loading,setLoading]=useState(false)
    const[data,setData]=useState([])

    const followUsers=async(data)=>{
        setLoading(true)
        try {
            const res=await axiosInstance.post('/user/follow',data)
            console.log(res,"ressss")
            setData(res.data.users)
         } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }

    }
   
    return{loading,followUsers,data}
}



export function useUnfollowUser(){

    const[loading,setLoading]=useState(false)

    const Unfollow=async(data)=>{
        setLoading(true)
        try {
            const res=await axiosInstance.post('/user/unfollow',data)
            console.log(res)
        } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }
    }
    return{loading,Unfollow}
}

export function useFollowing(){

    const[loading,setLoading]=useState(false)

    const Following=async(data)=>{
        setLoading(true)
        try {
            const res=await axiosInstance.post('/user/following',data)
            console.log(res)
        } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }
    }
    return{loading,Following}
}

export function useGetFollowers(){
const { setFollowingList } = useFollowContext();

    const[loading,setLoading]=useState(false)

    const Followers=async(data)=>{
        setLoading(true)
        try {
            const res=await axiosInstance.get('/user/followers',data)
           setFollowingList(res?.data)
        } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }

        
    }
    useEffect(()=>{
            Followers()
        },[])
    return{loading}
}


