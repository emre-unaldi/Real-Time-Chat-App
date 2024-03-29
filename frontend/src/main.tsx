import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChatProvider} from "./context/ChatContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <ChatProvider>
        <App />
    </ChatProvider>
  </React.Fragment>,
)
