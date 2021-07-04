import React, {useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Form,Col, Button} from 'react-bootstrap';
import {Container, Typography} from "@material-ui/core";
import logo from '../../assets/image/logo.png';
import AdminNavigation from '../../components/AdminNavigation';
 
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

export default function VCRegistration() {
  const classes = useStyles();
  // const theme = useTheme();

  let history = useHistory();
  // const [vc_id, setVc_id]= useState['']
  // const [admin_id, setAdmin_id]=useState('');
 

  const [admin_id, setAdmin_id]=useState('');
  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [email, setEmail]=useState('');
  const [address, setAddress]=useState('');
  const [phone, setPhone] = useState([]);
  const [reg_no, setReg_no] = useState("");
  const [city, setCity] = useState();
  const [state, setState] = useState([]);
  const [zip, setZip] = useState("");
 
 


  const onSubmit = async e => {
    e.preventDefault();
let VC={name,email,password,admin_id,address,phone,reg_no,city, state,zip}
    fetch("http://localhost:3001/VCRegistration",{
      method: "POST",
      headers:{
       'Accept' : 'application/json',
       'Content-Type' : 'application/json'
   },
   body: JSON.stringify(VC)
 }).then((result)=>{
   console.warn("result", result);
 })
 alert("data submited");
 window.location.reload();

  
  };
  


  return (
    <Container >
 
      <AdminNavigation />
      <div className="VCLabel"  >
        <img src={logo} alt=" " style={{height:100,width:100, marginLeft:130}} />
        <Col xs={2}>
 <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50,marginLeft:-10}} >
        VACCINATION
      </Typography>
      </Col>
      <Col>
      <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50,marginLeft:70}}>
        Center
      </Typography></Col>
      <Col>
      <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50}}>
        Registration
      </Typography></Col>
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
        <Form.Row>
  {/* <Form.Group as={Col} controlId="vc_id">
      <Form.Label className="vc_id">Vaccination Center-id</Form.Label>
      <Form.Control type="text" name="vc_id" value={vc_id} onChange={e => onInputChange(e)} placeholder="Enter Vaccination Center ID" />
    </Form.Group> */}
    <Form.Group as={Col} controlId="admin_id">
      <Form.Label className="admin_id">Admin-id</Form.Label>
      <Form.Control type="text" name="admin_id"  defaultValue={sessionStorage.admin_id}  onChange={(e) => setAdmin_id(e.target.defaultValue)} />
    </Form.Group>
  </Form.Row>
<Form.Row>
<Form.Group as={Col} controlId="name">
      <Form.Label className="name">Vaccination Center Name</Form.Label>
      <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Vaccination Center Name" />
    </Form.Group>
    

    <Form.Group controlId="email">
    <Form.Label className="email">Email</Form.Label>
    <Form.Control type="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter Email" />
    </Form.Group>
  
    <Form.Group as={Col} controlId="password">
      <Form.Label className="password">Password</Form.Label>
      <Form.Control type="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
    </Form.Group>
    </Form.Row>


  <Form.Row>
    <Form.Group as={Col} controlId="phone">
      <Form.Label className="phone">Phone#</Form.Label>
      <Form.Control type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="reg_no">
      <Form.Label className="reg_no">Registration No.</Form.Label>
      <Form.Control type="number" name="reg_no" value={reg_no} onChange={(e) => setReg_no(e.target.value)} placeholder="Enter Registration No" />
    </Form.Group>

  </Form.Row>
  <Form.Group controlId="address">
    <Form.Label className="address">Address</Form.Label>
    <Form.Control type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder=" 1234 Main St Apartment, studio, or floor" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label className="city">City</Form.Label>
      <Form.Control type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
    </Form.Group>

    <Form.Group as={Col} controlId="state">
      <Form.Label className="state">State</Form.Label>
      <Form.Control type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter state" />
    </Form.Group>

    <Form.Group as={Col} controlId="zip">
      <Form.Label className="zip">Zip</Form.Label>
      <Form.Control type="text" name="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Enter Zip/Postal Code" />
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
