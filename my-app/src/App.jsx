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

function App() {
  

  return (
    <>

     <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/chat/:id' element={<ChatPage/>}/>
      </Routes>
     </Router>



      
    </>
  )
}

export default App
