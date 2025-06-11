import { useEffect } from 'react';
import {  useSocketContext } from '../context/SocketContext';
import {useConversation} from '../context/ConversationContext'

const useListenMessages = () => {
const {socket}=useSocketContext()
console.log(socket,"//////////////////////////")
const {messages,setMessages} =useConversation();


useEffect(()=>{
socket?.on("newMessage",(newMessage)=>{
    console.log(newMessage,"newMessageeeee")
setMessages([...messages,newMessage])
},[messages,setMessages,socket])

return ()=>socket?.off("newMessage")
},[socket,setMessages,messages])
}

export default useListenMessages  