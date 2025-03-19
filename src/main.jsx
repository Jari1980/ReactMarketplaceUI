import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body.jsx'
import NavbarComp from './components/NavbarComp.jsx'
import Heading from './components/Heading.jsx'
import About from './components/About.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterComp from './components/FooterComp.jsx'
import Counter from './components/Counter.jsx'
import { CounterProvider } from './components/context.jsx'




createRoot(document.getElementById('root')).render(
  <div>
     
    <BrowserRouter>
    <CounterProvider>
    <NavbarComp />
    <Heading /> 
            <Routes>
            <Route exact path='/' element={<Body />} />
             <Route path='/home' element={<Body />} />
            <Route path='/about' element={<About />} />
            <Route path='/counter' element={<Counter />} />
        </Routes>
        <FooterComp />
        </CounterProvider>
        </BrowserRouter>
   
    
  </div>,
)

