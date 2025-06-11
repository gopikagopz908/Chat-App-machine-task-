import React, { useState } from 'react';
import MessageCard from '../components/MessageCard';
import { useGetMessages, useSendMessage } from '../Hook/MessageHook';
import { useConversation } from '../context/ConversationContext';

const ChatPage = () => {

    const{selectedConversation}=useConversation()
    const[data,setData]=useState('')
  
    const{sendMessage}=useSendMessage()
    const{messages}=useGetMessages()

    console.log(messages,'kkkkk')


    const handleSubmit=async()=>{
      const status= await sendMessage({message:data})
      console.log(status,"isisisiisis")
      if(status===201){
setData("")
      }
        
    }
  return (
    <div className="min-h-screen bg-white flex flex-col">
     
     

      {/* User Info */}
      <div className="flex items-center px-4 py-2 border-b">
        <button className="text-xl mr-2">←</button>
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-full w-10 h-10 mr-2"
        />
        <span className="font-semibold">Rajesh Kumar</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-4 py-2 overflow-y-auto space-y-4">
            {messages?.map((msg)=>(
            <MessageCard msg={msg}   />

            ))}
        </div>

      {/* Message Input */}
      <form  onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
      }} className="border-t px-4 py-3 flex items-center">
        <input
         onChange={(e)=>setData(e.target.value)}
         value={data}
          type="text"
          placeholder="Type something here.."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg ml-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
