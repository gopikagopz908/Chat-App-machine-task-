import { useEffect } from 'react';
import { useConversation } from '../context/ConversationContext';

import {useSocketContext} from '../context/socketContext';


const useListenMessages = () => {
const {socket}=useSocketContext()
const {messages,setMessages} =useConversation();


useEffect(()=>{
socket?.on("newMessage",(newMessage)=>{
setMessages([...messages,newMessage])
},[messages,setMessages,socket])

return ()=>socket?.off("newMessage")
},[socket,setMessages,messages])
}

export default useListenMessages  