// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import RegisterPage from '../pages/Register';
// import Login from '../pages/Login';
// import ChatPage from '../pages/ChatPage';
// import SidebarLayout from '../layout/SidebarLayout';
// import MainLayout from '../layout/MainLayout';
// import Home from '../pages/Home'
// import Friends from '../pages/Friends'
// import { useAuthContext } from '../context/AuthContext';


// const AppRoutes = () => {
//     const {authUser}=useAuthContext()
//     console.log(authUser,"athhhtt")
//   return (
//     <Routes>
//       <Route path='/' element={<RegisterPage/>} /> 
//       <Route path='/login' element={<Login />} /> 
       
//      <Route element={<MainLayout />}>
//         <Route path='/home' element={<Home/>} />
//         <Route path='/friends' element={<Friends/>} />

//         <Route element={<SidebarLayout />}>
//           <Route path='/chat' element={<ChatPage/>} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import RegisterPage from '../pages/Register';
import Login from '../pages/Login';
import ChatPage from '../pages/ChatPage';
import SidebarLayout from '../layout/SidebarLayout';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Friends from '../pages/Friends';

import { useAuthContext } from '../context/AuthContext';

const AppRoutes = () => {
  const { authUser } = useAuthContext();
  const isAuthenticated = !!authUser;

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/home" />} />
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} />

      {/* Protected Routes */}
      {isAuthenticated ? (
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route element={<SidebarLayout />}>
            <Route path="/chat" element={<ChatPage />} />
          </Route>
        </Route>
      ) : (
       
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
