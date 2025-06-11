import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext } from './context/AuthContext.jsx'
import { ConversationProvider } from './context/ConversationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <ConversationProvider>
       <App />
      </ConversationProvider>
    </AuthContext>
   
  </StrictMode>,
)
