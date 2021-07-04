import React from 'react';
import '../../App.css';
import { Container,Row,Col } from "react-bootstrap";
import AdminNavigation from '../../components/AdminNavigation';
import VaccineChart from '../../components/Charts/VaccineChart';
import PatientChart from '../../components/Charts/PatientChart';
export default function DoctorDashboard(){

    return(
        <div>
            <AdminNavigation />
            
        <Container >
  <Row>
      <Col md={6}>
  <div className="d-flex flex-row">
  <VaccineChart />
  </div>
  </Col>
  <Col md={6}>
  <div className="d-flex flex-row">
  <PatientChart />
  </div>
  </Col>
  </Row>

</Container>
</div>
)}



