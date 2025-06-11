import React from 'react';
import { useConversation } from '../context/ConversationContext';

const MessageCard = ({msg}) => {
 const{selectedConversation}=useConversation()
  const isSelected =msg?._id===selectedConversation?._id;
  console.log(msg._id,"issss",selectedConversation._id)
  return (
    <div className='w-full flex flex-col '> 
    <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-sm max-w-xs">
      <p className="text-sm font-medium">
      {msg.message}
      </p>
    </div>
    </div>
  );
};

export default MessageCard;
