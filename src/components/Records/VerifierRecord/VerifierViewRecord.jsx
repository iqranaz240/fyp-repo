import React, { useState, useEffect } from "react";
import '../../../App.css';
import Header from '../../../components/Header';
import { Link, useParams } from "react-router-dom";
import { Card, Container,Button,Form } from "react-bootstrap";
import axios from "axios";


export default class VerifierViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    verifier: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {verifier_id} = this.props.match.params;
  fetch(`http://localhost:3001/verifier/${verifier_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    verifier: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {verifier} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Verifier ID: ver0{verifier.verifier_id}</h1>
      <hr />
   
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Verification Center_id:   {verifier.vfc_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Full Name: {verifier.f_name}  {verifier.l_name} </Card.Title>
      </Card.Body >
      </Card >
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Email:   {verifier.email} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Password: {verifier.password} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Phone Number: {verifier.phone} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Qualification: {verifier.qualification} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Gender: {verifier.gender} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>DOB: {verifier.dob} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>CNIC: {verifier.cnic} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Address: {verifier.address} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City : {verifier.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>state: {verifier.state} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Zip: {verifier.zip} </Card.Title>
      </Card.Body >
      </Card>
      

    </div>
  );
};

}