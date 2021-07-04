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
    doctor: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {doctor_id} = this.props.match.params;
  fetch(`http://localhost:3001/doctorRegistration/${doctor_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    doctor: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {doctor} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Doctor ID: {doctor.doctor_id}</h1>
      <hr />
   
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Center_id:   {doctor.vc_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Full Name: {doctor.f_name}  {doctor.l_name} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Father's Name: {doctor.father_name}  </Card.Title>
      </Card.Body >
      </Card >
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Email:   {doctor.email} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Password: {doctor.password} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Phone Number: {doctor.phone} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Qualification: {doctor.qualification} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Gender: {doctor.gender} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>DOB: {doctor.dob} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Martial Status: {doctor.dob} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>CNIC: {doctor.cnic} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Registration Date: {doctor.gender} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Address: {doctor.address} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City : {doctor.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>state: {doctor.state} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Zip: {doctor.zip} </Card.Title>
      </Card.Body >
      </Card>
      
    </div>
  );
};

}