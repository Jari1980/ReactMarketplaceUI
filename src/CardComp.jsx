import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



const CardComp = (props) => {
  return (
    <Card key={props.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} alt="..."/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
          <br/>
          <br/>
          {props.contact}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
