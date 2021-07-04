import React, { useState, useEffect } from "react";
import '../../../App.css';
import Header from '../../../components/Header';
import { Link, useParams } from "react-router-dom";
import { Card, Container,Button,Form } from "react-bootstrap";
import axios from "axios";


export default class PatientViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    patient: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {patient_id} = this.props.match.params;
  fetch(`http://localhost:3001/patientRegistration/${patient_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    patient: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {patient} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Patient ID: {patient.patient_id}</h1>
      <hr />
   
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Center_id:   {patient.vc_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Full Name: {patient.f_name}  {patient.l_name} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Father's Name: {patient.father_name}  </Card.Title>
      </Card.Body >
      </Card >
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Email:   {patient.email} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Password: {patient.password} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Phone Number: {patient.phone} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Qualification: {patient.qualification} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Gender: {patient.gender} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>DOB: {patient.dob} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Martial Status: {patient.dob} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>CNIC: {patient.cnic} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Registration Date: {patient.gender} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Address: {patient.address} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City : {patient.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>state: {patient.state} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Zip: {patient.zip} </Card.Title>
      </Card.Body >
      </Card>
      

    </div>
  );
};

}