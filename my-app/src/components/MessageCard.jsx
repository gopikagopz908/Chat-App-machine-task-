import React from 'react';
import { useConversation } from '../context/ConversationContext';
import { useAuthContext } from '../context/AuthContext';

const MessageCard = ({msg}) => {
 const{selectedConversation}=useConversation()
 const {authUser}=useAuthContext()
 console.log(authUser,'authhh')
  const isSelected =msg?.senderId===selectedConversation?._id;
  console.log(msg,"msgggggg")
  return (
<div className={`w-full flex flex-col ${isSelected?'items-end':'items-start'} `}>
  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-sm max-w-xs">
    <p className="text-sm font-medium">{msg?.message}</p>
  </div>
</div>

  );
};

export default MessageCard;
