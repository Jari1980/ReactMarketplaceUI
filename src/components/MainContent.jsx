import React from 'react';
import Body from './Body.jsx'
import About from './About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainContent = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='' element={<Body />} />
             <Route path='/home' element={<Body />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </BrowserRouter>
    );
};

export default MainContent;