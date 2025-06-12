import React from 'react';
import Button from './Button'; 
import { useNavigate } from 'react-router-dom';
import { useConversation } from '../context/ConversationContext';
import { useFollowUser } from '../Hook/UsersHook';

function UserCard({ user,isConnect=true }) {
  const navigate=useNavigate()
  const{setSelectedConversation}=useConversation()
  const {followUsers} =useFollowUser()
  const handleConversation=(user)=>{
    setSelectedConversation(user)
  navigate(`/chat`)
  }

  const handleFollowUsers=(id)=>{
    followUsers({userIdToFollow:id})
  }
  
  return (
    <div 
    onClick={()=>handleConversation(user)}
     className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md w-full ">
      <div className="flex items-center gap-4">
        <img
          src={user.image || `https://ui-avatars.com/api/?name=${user?.firstName}&background=random&color=fff`}
          alt={user.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900">{user.firstName}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-xs text-gray-400 mt-1">{user.time}</p>
        </div>
      </div>
      {isConnect &&(
      <Button 
      label="Connect" 
      variant="outline" 
      onClick={()=>handleFollowUsers(user?._id)} 
       />
      )}

    </div>
  );
}

export default UserCard;
