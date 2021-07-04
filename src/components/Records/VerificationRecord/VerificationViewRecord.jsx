import React, { useState, useEffect } from "react";
import '../../../App.css';
import Header from '../../../components/Header';
import { Link, useParams } from "react-router-dom";
import { Card, Container,Button,Form } from "react-bootstrap";
import axios from "axios";


export default class VerificationViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    verification: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {vn_id} = this.props.match.params;
  fetch(`http://localhost:3001/verification/${vn_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    verification: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {verification} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Verification ID: {verification.vn_id}</h1>
      <hr />
     
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Verifier_id:   {verification.verifier_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Verification Center_id:   {verification.vfc_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Patient_id: {verification.patient_id} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Verification Time: {verification.time} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Verification Date: {verification.date} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Verification Result: {verification.result} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Verification Purpose: {verification.purpose} </Card.Title>
      </Card.Body >
      </Card>
      

    </div>
  );
};

}