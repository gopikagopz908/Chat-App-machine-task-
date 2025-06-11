import React from "react";
import { useConversation } from "../context/ConversationContext";

const SidebarUserCard = ({ user }) => {
    const{setSelectedConversation}=useConversation()
      const handleConversation=()=>{
    setSelectedConversation(user)
  
  } 
  return (
    <div 
    onClick={handleConversation}
    className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm w-full">
      <img
        src={
          user.image ||
          `https://ui-avatars.com/api/?name=${user?.firstName}&background=random&color=fff`
        }
        alt={user.firstName}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">{user.firstName}</h3>
        <p className="text-xs text-gray-500 truncate">{user.email}</p>
        {user.time && <p className="text-[10px] text-gray-400 mt-1 truncate">{user.time}</p>}
      </div>
    </div>
  );
};

export default SidebarUserCard;
