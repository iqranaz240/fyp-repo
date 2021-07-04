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
export default class VCViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    vc: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {vc_id} = this.props.match.params;
  fetch(`http://localhost:3001/VCRegistration/search/${vc_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    vc: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {vc} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Vaccination Center Id: vcc{vc.vc_id}</h1>
      <hr />
  
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Center Name:    {vc.name} </Card.Title>
      </Card.Body >
      </Card>
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Admin Id:    {vc.admin_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Email: {vc.email} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Password: {vc.password} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Address: {vc.address} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>PhoneNo: {vc.phone} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Registration No: {vc.reg_no} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City: {vc.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>City: {vc.city} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Zip: {vc.zip} </Card.Title>
      </Card.Body >
      </Card>

      
      
      <Link className="btn btn-primary" to="/VCRecordAD" style={{marginTop:20}}>
        Back 
      </Link>
    </div>
  );
};

}