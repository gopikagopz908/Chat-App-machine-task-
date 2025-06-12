import React, { useState } from 'react';
import MessageCard from '../components/MessageCard';
import { useGetMessages, useSendMessage } from '../Hook/MessageHook';
import { useConversation } from '../context/ConversationContext';
import useListenMessages from '../Hook/useListenMessages';
import TopNavbar from '../components/MainNavbar';
import NavBar from '../components/NavBar';


const ChatPage = () => {
   const{selectedConversation}=useConversation()
   console.log(selectedConversation,"selecteddd")
useListenMessages() 
  const[data,setData]=useState('')
    
    const{sendMessage}=useSendMessage()
    const{messages}=useGetMessages()

const handleSubmit=async()=>{
      const status= await sendMessage({message:data})
      console.log(status,"isisisiisis")
      if(status===201){
setData("")
      }
        
    }
  return (

 <div className='flex w-full'>

    <div className="min-h-screen w-full bg-white flex flex-col">
        <TopNavbar/>
        <NavBar/>
      {!selectedConversation ? (
        // 🔹 If no user is selected, show this placeholder
        <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
          Select a user to start chatting
        </div>
      ) : (
        <>
          {/* User Info */}
          <div className="flex items-center px-4 py-2 border-b">
            <button className="text-xl mr-2">←</button>
            <img
              src={`https://ui-avatars.com/api/?name=${selectedConversation?.firstName}&background=random&color=fff`}
              alt="User"
              className="rounded-full w-10 h-10 mr-2"
            />
            <span className="font-semibold">
              {`${selectedConversation?.firstName} ${selectedConversation?.lastName}`}
            </span>
          </div>

          {/* Chat Area */}
          <div className="flex-1 px-4 py-2 overflow-y-auto space-y-4">
            {messages?.map((msg) => (
              <MessageCard msg={msg} key={msg?._id} />
            ))}
          </div>

          {/* Message Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="border-t px-4 py-3 flex items-center"
          >
            <input
              onChange={(e) => setData(e.target.value)}
              value={data}
              type="text"
              placeholder="Type something here.."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg ml-2">
              Send
            </button>
          </form>
        </>
      )}
    </div>
  </div>
  );
};

export default ChatPage;
