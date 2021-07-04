import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from '../assets/image/logo.png'

export default function Header(){
    return(
        <div>
        <Navbar fixed="top" style={{backgroundColor:"#41649c"}}>
    <Navbar.Brand style={{fontFamily:"Carter One", color:"#fff"}}>
        <img src={logo} alt=" " style={{height:50,width:50}}/>
        DIGITAL IMMUNITY PASSPORT</Navbar.Brand>
    
  </Navbar>

  
  </div>
    )
}