import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  AuthContextProvider } from './context/AuthContext.jsx'
import { ConversationProvider } from './context/ConversationContext.jsx'

import{SocketContextProvider}from './context/socketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ConversationProvider>
       <SocketContextProvider>
<App />
       </SocketContextProvider>

       
      </ConversationProvider>
    </AuthContextProvider>
   
  </StrictMode>,
)
