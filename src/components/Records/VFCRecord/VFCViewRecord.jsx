import React, { useState, useEffect } from "react";
import '../../../App.css';
import Header from '../../../components/Header';
import { Link, useParams } from "react-router-dom";
import { Card, Container,Button,Form } from "react-bootstrap";
import axios from "axios";


export default class VFCViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    vfc: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {vfc_id} = this.props.match.params;
  fetch(`http://localhost:3001/VFRegistration/${vfc_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    vfc: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {vfc} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Verification Center Id: {vfc.vfc_id}</h1>
      <hr />
  
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Center Name:    {vfc.name} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Email: {vfc.email} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Password: {vfc.password} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>PhoneNo: {vfc.phone} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Registration No: {vfc.reg_no} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Address: {vfc.address} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City: {vfc.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City: {vfc.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Zip: {vfc.zip} </Card.Title>
      </Card.Body >
      </Card>

    </div>
  );
};

}