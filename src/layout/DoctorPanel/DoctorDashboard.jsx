import React from 'react';
import '../../App.css';
import { Container,Row } from "react-bootstrap";
import DoctorNavigation from '../../components/DoctorNavigation';

export default function DoctorDashboard(){

    return(
        <div>
            <DoctorNavigation />
        <Container >
  <Row>
    
    <h1>Doctor Dashboard</h1>
  </Row>
</Container>
</div>
)}



