import React from 'react';
import Body from './Body.jsx'
import About from './About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//Not using this component at moment, was struggling to render maincontent only on loading different "body content" issue solved
const MainContent = () => {
    return (
        <>
        <div>
        <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Body />} />
             <Route path='/home' element={<Body />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </BrowserRouter>
        </div>
        </>
    );
};

export default MainContent;

/*
<BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Body />} />
             <Route path='/home' element={<Body />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </BrowserRouter>
*/