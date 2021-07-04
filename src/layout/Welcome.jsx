import React, {useEffect,useState} from 'react';
import '../App.css';
import { Container,Button,Row,Col } from "react-bootstrap";
// import {Button} from '@material-ui/core'
import logo from '../assets/image/logo.png';
import {useHistory} from 'react-router-dom'

export default function Welcome(props){
    const history= useHistory();
    const handleChange=()=>{
        props.history.push('/AdminLogin')
    }

  
 

    return(
        <div className="main">
        <Container fuild="xl" >
  <Row>
    <Col xl={12}><img src={logo} alt=" " className="mainLogo" /></Col>
    <Col xl={12}><h1 className="mainh1" >WELCOME TO</h1></Col>
    <Col><h4 className="mainh4" >DIGITAL IMMUNITY</h4></Col>
    <Col> <h6 className="mainh6" >PASSPORT</h6></Col> 
    <Col xl={12}>
    <Button className="startBtn" variant="outline-primary" onClick={handleChange} >Get started
    </Button>
    </Col>
  </Row>
</Container>
</div>
)}



