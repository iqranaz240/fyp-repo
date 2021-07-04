import React, { useState, useEffect } from 'react'  
import axios from 'axios';
import '../../App.css';
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Form,Col, Button} from 'react-bootstrap';
import {Container, Typography} from "@material-ui/core";
import logo from '../../assets/image/logo.png';
import DoctorNavigation from '../../components/DoctorNavigation';

 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:200,
    marginBottom:100
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Patient() {

  
  const classes = useStyles();
  const theme = useTheme();

  let history = useHistory();
  const [vaccination, setVaccination] = useState({
           patient_id: '' ,
            vc_id: '', 
            vaccine_id:'', 
            doctor_id:'' , 
            time:'',
            date:'',
            result:'',
            reason:''
  });

  const {   patient_id,vc_id, vaccine_id, doctor_id, time,date,result,reason } = vaccination;
  const onInputChange = e => {
    setVaccination({ ...vaccination, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
     
    await axios.post("http://localhost:3001/vaccination", vaccination);
    alert("data submited");
    window.location.reload();

  };


  // const [item, setItem] = useState([]);  
  
  // useEffect(() => {  
  //     debugger;  
  //     axios  
  //         .get("http://localhost:3001/VCRegistration/vcData")  
  //         .then(result => setItem(result.item));  
  //     console.log(item);  
  //     debugger;  
  // }, []);  
    
  

  return (
    <Container>
      <DoctorNavigation />
      <div className="VCLabel"  >
        <img src={logo} alt=" " style={{height:100,width:100, marginLeft:130}} />
 <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50,marginLeft:70}} >
        Patient
      </Typography>
      </div>
    <Card className="registration">
    <CardMedia
        className={classes.cover}
        // image="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // title="Live from space album cover"
        style={{backgroundColor:"#41649c"}}
      />
      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography style={{fontSize:30, marginBottom:20,fontFamily: "Carter One", color: "#41649c"}}>
            Registration Form
          </Typography>

        <Form onSubmit={e => onSubmit(e)}>
          {/* <Form.Row>
          <Form.Group as={Col}>
      <Form.Label className="v_id"  >Vaccination_id</Form.Label>
      <Form.Control type="text" name="v_id" value={v_id} onChange={e => onInputChange(e)} placeholder="Enter vaccination-id" />
    </Form.Group>
          </Form.Row> */}
        <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="patient_id" >Patient-id</Form.Label>
      <Form.Control type="text" name="patient_id" value={patient_id} onChange={e => onInputChange(e)} placeholder="Enter Patient-id" />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label className="doctor_id" >Doctor-id</Form.Label>
      <Form.Control type="text" name="doctor_id" value={doctor_id} onChange={e => onInputChange(e)} placeholder="Enter doctor-id" />
    </Form.Group>
</Form.Row>
  <Form.Row>
    <Form.Group as={Col} className="container" >
    <Form.Label  className="VC_id" >Vaccination Center ID</Form.Label> 

      {/* <select>
        {items.map(item=>(
          <option key={item.Id} >{item.vc_id}</option>
        ))}
      
      </select> */}
            <Form.Control type="text" name="vc_id" value={vc_id} onChange={e => onInputChange(e)} placeholder="Enter Vaccination Center Id" />

    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label className="vaccine_id" >Vaccine-id</Form.Label>
      <Form.Control type="text" name="vaccine_id" value={vaccine_id} onChange={e => onInputChange(e)} placeholder="Enter vaccine ID" />
    </Form.Group>
</Form.Row>
<Form.Row>
  <Form.Group >
      <Form.Label className="date" >Vaccination Date</Form.Label>
      <Form.Control type="text" name="date" value={date} onChange={e => onInputChange(e)} placeholder="Enter Vaccination Date" />
    </Form.Group>
    <Form.Group >
      <Form.Label className="time" >Vaccination Time</Form.Label>
      <Form.Control type="text" name="time" value={time} onChange={e => onInputChange(e)} placeholder="Enter Vaccination Date" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="result" >Vaccination Result</Form.Label>
      <Form.Control type="text" name="result" value={result} onChange={e => onInputChange(e)} placeholder="i-e Verify/Not Verify" />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label className="reason">Vaccination Purpose</Form.Label>
      <Form.Control type="text" name="reason" value={reason} onChange={e => onInputChange(e)} />
    </Form.Group>
  </Form.Row>

  <Button variant="primary"  type="submit">
    Register
  </Button>
</Form>
         
        </CardContent>
        
      </div>
    
    </Card>
    </Container>
  );

  }