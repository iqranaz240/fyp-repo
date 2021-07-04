import React, {useState } from 'react';
import '../../App.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Form,Col, Button} from 'react-bootstrap';
import {Container, Typography} from "@material-ui/core";
import logo from '../../assets/image/logo.png';
import VerifierNavigation from '../../components/VerifierNavigation';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:300,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 330,
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

export default function VerifyPatientRecords() {
  const classes = useStyles();
  const theme = useTheme();

  let history = useHistory();
  const [verification, setVerification] = useState({
           patient_id: '' ,
            vfc_id: '',  
            time:'',
            date:'',
            result:'',
            purpose: ''
  });

  const {  patient_id, vfc_id , time,date,result, purpose } = verification;
  const onInputChange = e => {
    setVerification({ ...verification, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault(); 
    await axios.post("http://localhost:3001/verification", verification);
    history.push("/VerifyPatientRecords");
    alert("data submited");
    window.location.reload();

  };



  return (
    <Container>
      <VerifierNavigation />
      <div className="VCLabel"  >
        <img src={logo} alt=" " style={{height:100,width:100, marginLeft:230}} />
 <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:40,marginLeft:120}} >
        Verify Patient's
      </Typography>
      <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:40,marginLeft:170}}>
        Records
      </Typography>
      </div>
    <Card className="registration1" >
    <CardMedia
        className={classes.cover}
        // image="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // title="Live from space album cover"
        style={{backgroundColor:"#41649c"}}
      />
      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography style={{fontSize:30, marginBottom:20,fontFamily: "Carter One", color: "#41649c"}}>
            Verification Form
          </Typography>
        <Form onSubmit={e => onSubmit(e)}>
        {/* <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="vn_id">Verification-id</Form.Label>
      <Form.Control type="text" name="vn_id" value={vn_id} onChange={e => onInputChange(e)} placeholder="Enter Verification-id" />
    </Form.Group>
  </Form.Row> */}
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="patient_id">Patient-id</Form.Label>
      <Form.Control type="text" name="patient_id" value={patient_id} onChange={e => onInputChange(e)} placeholder="Enter Patient-id" />
    </Form.Group>
  </Form.Row>
  
  <Form.Group >
    <Form.Label className="vfc_id">Verifier_id</Form.Label>
    <Form.Control type="text" name="vfc_id" value={vfc_id} onChange={e => onInputChange(e)} placeholder=" Enter Verifier id" />
  </Form.Group>
  <Form.Row>
  <Form.Group >
      <Form.Label className="date">Verification Date</Form.Label>
      <Form.Control type="text" name="date" value={date} onChange={e => onInputChange(e)} placeholder="Enter Verification Date" />
    </Form.Group>
    <Form.Group >
      <Form.Label className="time">Verification Time</Form.Label>
      <Form.Control type="text" name="time" value={time} onChange={e => onInputChange(e)} placeholder="Enter Verification Date" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="result">Verification Result</Form.Label>
      <Form.Control type="text" name="result" value={result} onChange={e => onInputChange(e)} placeholder="i-e Verify/Not Verify" />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label className="purpose">Verification Purpose</Form.Label>
      <Form.Control type="text" name="purpose" value={purpose} onChange={e => onInputChange(e)}  />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
         
        </CardContent>
        
      </div>
    
    </Card>
    </Container>
  );
}
