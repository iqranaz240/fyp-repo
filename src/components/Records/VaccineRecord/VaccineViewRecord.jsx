import React, { useState, useEffect } from "react";
import '../../../App.css';
import Header from '../../../components/Header';
import { Link, useParams } from "react-router-dom";
import { Card, Container,Button,Form } from "react-bootstrap";
import axios from "axios";

// const VCViewRecord = () => {
//     const [vc, setVC] = useState({
//         vc_id: '', 
//         name:'', 
//         email:'',
//         password:'',
//         address: '',
//         phone:'',
//         reg_no:'',
//         admin_id: '',
//         city:'', 
//         state:'',
//         zip:''

       
// });
//   const { vc_id } = useParams();
//   useEffect((vc_id) => {
//     loadVC();
//     alert(vc_id)
//   }, []);
export default class VaccineViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    vaccine: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {vaccine_id} = this.props.match.params;
  fetch(`http://localhost:3001/vaccine/${vaccine_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    vaccine: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {vaccine} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Vaccine ID: {vaccine.vaccine_id}</h1>
      <hr />
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccine Name:   {vaccine.title} </Card.Title>
      </Card.Body >
      </Card>
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination CEnter_id:   {vaccine.vc_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Vaccine Manufacturer: {vaccine.manf} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccine BatchNo: {vaccine.batch} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Production Date: {vaccine.p_date} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Expiry Date: {vaccine.e_date} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccine Availability: {vaccine.available} </Card.Title>
      </Card.Body >
      </Card>
      
    </div>
  );
};

}