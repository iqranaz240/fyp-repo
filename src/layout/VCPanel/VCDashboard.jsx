import React from 'react';
import '../../App.css';
import { Container,Row} from "react-bootstrap";
import VCNavigation from '../../components/VCNavigation';

export default function VCDashboard(){

    return(
        <div>
            <VCNavigation />
        <Container >
  <Row>
    
    <h1 style={{marginLeft:200}} >VC Dashboard</h1>
  </Row>
</Container>
</div>
)}



