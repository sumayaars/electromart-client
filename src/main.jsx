import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import Context from './ContextApi/Context.jsx';

createRoot(document.getElementById('root')).render(

   <BrowserRouter>
  <Context>
  <App />
  </Context>
  </BrowserRouter>

)
