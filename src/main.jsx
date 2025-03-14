import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body.jsx'
import NavbarComp from './NavbarComp.jsx'
import Heading from './components/Heading.jsx'
import 'bootstrap/dist/css/bootstrap.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComp />
    <Heading />
    <Body />
  </StrictMode>,
)
