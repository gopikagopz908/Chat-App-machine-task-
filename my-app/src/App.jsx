import React from 'react'

import './App.css'
// import InputField from './components/inputField'
// import Button from './components/Button'
// import UserCard from './components/UserCard';

import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import ChatPage from './pages/ChatPage'

import SidebarLayout from './layout/SidebarLayout'
import Friends from './pages/Friends'
import MainLayout from './layout/MainLayout'

function App() {
  

  return (
    <>

     <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
     <Route  element={<MainLayout/>}>
        <Route path='/home' element={<Home/>}/>
       
    
        <Route path='/friends' element={<Friends/>}/>
         <Route element={<SidebarLayout/>}>
          <Route path="/chat" element={<ChatPage />} />
        </Route>
        </Route>
      </Routes>
     </Router>



      
    </>
  )
}

export default App
