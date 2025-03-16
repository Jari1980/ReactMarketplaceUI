import React from 'react';
import './about.css';
import broccoli4 from '../assets/broccoli4.jpg'



const About = () => {
    return (
        <>
        <div className="container-fluid" id="about">
            <br />
            <br />
            <br />
            <h2 id="aboutId">Hello world</h2>
            <br />
            <div className='container'>
            <p>This is a single page application, SPA, created by me, using React 
                and Bootstrap for frontend for backend Im going to build Azure functions in Java.</p>
                <br />
                <br />
                <div className='container' id='aboutContainerImg'>
                <p id='good'>Broccoli is good!</p>
                <br />
                <img id="broccoli" src={broccoli4}/>
                </div>
                </div>
        </div>
        </>
    );
};

export default About;