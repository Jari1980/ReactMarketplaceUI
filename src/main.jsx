import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body.jsx'
import NavbarComp from './components/NavbarComp.jsx'
import Heading from './components/Heading.jsx'
import About from './components/About.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainContent from './components/MainContent.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComp />
    <Heading />  
    <MainContent />
    
    
  </StrictMode>,
)
