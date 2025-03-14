import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import advertisementsData from './data/AdvertisementData'



const CardComp = (props) => {
  return (
    <Card key={props.id} style={{ width: "18rem" }} onClick={() => toggle(props.id)}>
      <Card.Img variant="top" src={props.img} alt="..."/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
          <br/>
          <br/>
          <span id={props.id}>{props.contact}</span>
        </Card.Text>
        <Button variant="primary" onClick={() => alert("Contact: " + advertisementsData[props.id -1].contact + " for more info")}>Get info</Button>
      </Card.Body>
    </Card>
  );
};

function toggle(id){
  let mod = document.getElementById(id);
  if(mod.innerHTML == "***"){
    mod.innerHTML = advertisementsData[id - 1].contact;
  }
  else{
    mod.innerHTML = "***";
  }
}

export default CardComp;
