import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  

  return (
    <>

     {/* <Router>
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
     </Router> */}

    <Router>
      <AppRoutes />
    </Router>

      
    </>
  )
}

export default App
