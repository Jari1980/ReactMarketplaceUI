import React, { useState } from "react";
import "./counter.css";
import { Button } from "react-bootstrap";
import broccoli5 from "../assets/broccoli5.jpg";
// import NavbarComp from "./NavbarComp";
import { useCounterContext } from "./context.jsx";


const Counter = () => {
  const {counter, setCounter} = useCounterContext(0)

  


  return (
    <>
    
    <div id="counter">
      <div className="container">
        <br />
        <br />
        <br />
        <h2 id="aboutId">Counter component</h2>
        <br />
        <div className="buttonContainer">
          <Button className="button1" onClick={() => {setCounter(counter + 1)}}>Increase Number</Button>
          <Button className="button2" onClick={() => {setCounter(counter - 1)}}>Decrease number</Button>
        </div>
        <br />
        <p>The state of this counter is displayed somewhere, can you find it?</p>
        <br />
        <br />
        <br />
        <div className="container" id="aboutContainerImg">
          <p id="good">Green is good!</p>
          <br />
          <img id="broccoli2" src={broccoli5} />
        </div>
      </div>
    </div>
    </>
  );
};


export default Counter;
