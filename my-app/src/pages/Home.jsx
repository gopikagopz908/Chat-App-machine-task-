import React from 'react';
import UserCard from '../components/UserCard';
import NavBar from '../components/NavBar';
import { useAllUsers } from '../Hook/UsersHook';
import { useAuthContext } from '../context/AuthContext';
import TopNavbar from '../components/MainNavbar';

const ConnectPage = () => {
const{authUser}=useAuthContext()
console.log(authUser,"authhhh")
  const{data}=useAllUsers()
  return (
    <div className="min-h-screen  bg-white  pt-4 pb-10">
      
        <NavBar/>
      <div className="w-full mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <button
           onClick={() => window.history.back()} 
          className="text-lg font-semibold mt-4">&larr;</button>
          <h1 className="text-lg font-semibold mt-4">Connect with like-minded parents</h1>
        </div>
        <div className="flex flex-col gap-4">
          {data?.map((user, index) => (
            <UserCard key={index} user={user}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
