import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './Body.jsx'
import NavbarComp from './NavbarComp.jsx'
import Heading from './Heading.jsx'
import 'bootstrap/dist/css/bootstrap.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComp />
    <Heading />
    <Body />
  </StrictMode>,
)
