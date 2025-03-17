import React from "react";
import "./about.css";
import broccoli4 from "../assets/broccoli4.jpg";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import azureUrl from "../secrets/Url";

const About = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
        sender: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("message").value,
      };

      const url = `${azureUrl} + '"' + ${formData.sender} + '"' + &email= + '"' + ${formData.email} + '"' + &subject=${formData.subject}`;

    try {
        const response = await axios.post(url, {
            mode: "cors",
            withCredential: true,
        });
        console.log('Form data submitted successfully:', response.data);
        alert(
            "Thank you " +
              inputs.name +
              ", if you send something interesting Ill reach back on " +
              inputs.email
          );
      } catch (error) {
        console.error('Error submitting form data:', error);
      }

      setInputs((values) => ({...values, name: "", email: "", message: ""}));
  };

  return (
    <>
      <div className="container-fluid" id="about">
        <br />
        <br />
        <br />
        <h2 id="aboutId">Hello world</h2>
        <br />
        <div className="container">
          <p>
            This is a single page application, SPA, created by me, using React
            and Bootstrap for frontend for backend Im going to build Azure
            functions with Java.
          </p>
          <br />
          <br />
          <Form onSubmit={handleSubmit} id="contactForm">
            <span id="contactFormHeading">Contact Form</span>
            <Form.Group className="col-md-6" controlId="email">
              <Form.Label><span className="contactSpan">Email address</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                //id="email" formEmail
                value={inputs.email || ""}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="col-md-6" controlId="name">
              <Form.Label><span className="contactSpan">Name</span></Form.Label>
              <Form.Control
                type="text"
                name="name"
                //id="sender" formName
                value={inputs.name || ""}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="col-md-6" controlId="message">
              <Form.Label><span className="contactSpan">Subject</span></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="message"
                //id="message"  formSubject
                value={inputs.message || ""}
                onChange={handleChange}
                placeholder="Enter subject"
              />
            </Form.Group>
            <br />
            <Button type="submit">
                <span>Send me a message</span>
                </Button>
          </Form>
          <br />
          <br />
          <br />
          <div className="container" id="aboutContainerImg">
            <p id="good">Broccoli is good!</p>
            <br />
            <img id="broccoli" src={broccoli4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
