import React from 'react';
import { useConversation } from '../context/ConversationContext';
import { useAuthContext } from '../context/AuthContext';

const MessageCard = ({msg}) => {
 const{selectedConversation}=useConversation()
 const {authUser}=useAuthContext()
  const isSelected =msg?.senderId===selectedConversation?._id;
  return (
<div className={`w-full flex flex-col ${isSelected?'items-start':'items-end'} `}>
  <div className={` text-black px-4 py-2 rounded-lg shadow-sm max-w-xs  ${isSelected?'bg-primary ':'bg-[#F2F2F2]'}`}>
    <p className="text-sm font-medium">{msg?.message}</p>
  </div>
</div>

  );
};

export default MessageCard;
