import React from 'react';
import './heading.css';
import { useCounterContext } from "./context";

const Heading = () => {

    const {heading, setHeading} = useCounterContext("");

    return (
        <>
        <div className='container-fluid' id='headingContainer' style={{background: heading}}>
            <h1>Marketplace UI</h1>
        </div>
        </>
    );
};

export default Heading;