import React from 'react';
import Button from './Button'; // Reuse the button with `variant="outline"`
import { useNavigate } from 'react-router-dom';
import { useConversation } from '../context/ConversationContext';

function UserCard({ user }) {
  const navigate=useNavigate()
  const{setSelectedConversation}=useConversation()
  const handleConversation=(user)=>{
    setSelectedConversation(user)
  navigate(`/chat/${user._id}`)
  }
  
  return (
    <div 
    onClick={()=>handleConversation(user)}
     className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md w-full ">
      <div className="flex items-center gap-4">
        <img
          src={user.image || `https://ui-avatars.com/api/?name=${user.firstName}&background=random&color=fff`}
          alt={user.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900">{user.firstName}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-xs text-gray-400 mt-1">{user.time}</p>
        </div>
      </div>
      <Button label="Connect" variant="outline" onClick={() => alert(`Connecting to ${user.name}`)} />
    </div>
  );
}

export default UserCard;
