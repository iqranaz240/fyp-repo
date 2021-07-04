import React, {useState } from 'react';
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
// import AdminNavigation from '../../components/AdminNavigation';
import Header  from '../../components/Header';
 
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

export default function VCEditRecord() {
  const classes = useStyles();
  // const theme = useTheme();

  let history = useHistory();
  const [vc, setVC] = useState({
            vc_id: '',  
            admin_id: '',
            f_name:'',
            l_name:' ',
            email:'',
            password:'',
            address: '',
            phone:'',
            reg_no:'',
            city:'', 
            state:'',
            zip:''

           
  });

  const { vc_id , admin_id,name , email, password, address, phone, reg_no , city,state,zip} = vc;

  const onInputChange = e => {
    setVC({ ...vc, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/VCRegistration", vc);
    history.push("/VCRegistration");
  };
  


  return (
    <Container>
      <Header  />
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
  <Form.Group as={Col} controlId="vc_id">
      <Form.Label className="vc_id">Vaccination Center-id</Form.Label>
      <Form.Control type="text" name="vc_id" value={vc_id} onChange={e => onInputChange(e)} placeholder="Enter Vaccination Center ID" />
    </Form.Group>
    <Form.Group as={Col} controlId="admin_id">
      <Form.Label className="admin_id">Admin-id</Form.Label>
      <Form.Control type="text" name="admin_id" value={admin_id} onChange={e => onInputChange(e)} placeholder="Enter Admin ID" />
    </Form.Group>
  </Form.Row>
<Form.Row>
<Form.Group as={Col} controlId="name">
      <Form.Label className="name">Vaccination Center Name</Form.Label>
      <Form.Control type="text" name="name" value={name} onChange={e => onInputChange(e)} placeholder="Enter Vaccination Center Name" />
    </Form.Group>
    

    <Form.Group controlId="email">
    <Form.Label className="email">email</Form.Label>
    <Form.Control type="Email" name="email" value={email} onChange={e => onInputChange(e)} placeholder=" Enter Email" />
    </Form.Group>
  
    <Form.Group as={Col} controlId="password">
      <Form.Label className="password">Password</Form.Label>
      <Form.Control type="Password" name="password" value={password} onChange={e => onInputChange(e)}placeholder="Enter Password" />
    </Form.Group>
    </Form.Row>

  <Form.Group controlId="address">
    <Form.Label className="address">Address</Form.Label>
    <Form.Control type="text" name="address" value={address} onChange={e => onInputChange(e)} placeholder=" 1234 Main St Apartment, studio, or floor" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="phone">
      <Form.Label className="phone">Phone#</Form.Label>
      <Form.Control type="text" name="phone" value={phone} onChange={e => onInputChange(e)} placeholder="Enter Phone Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="reg_no">
      <Form.Label className="reg_no">Registration No.</Form.Label>
      <Form.Control type="number" name="reg_no" value={reg_no} onChange={e => onInputChange(e)} placeholder="Enter Registration No" />
    </Form.Group>

  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label className="city">City</Form.Label>
      <Form.Control type="text" name="city" value={city} onChange={e => onInputChange(e)} placeholder="Enter City" />
    </Form.Group>

    <Form.Group as={Col} controlId="state">
      <Form.Label className="state">State</Form.Label>
      <Form.Control type="text" name="state" value={state} onChange={e => onInputChange(e)} placeholder="Enter state" />
    </Form.Group>

    <Form.Group as={Col} controlId="zip">
      <Form.Label className="zip">Zip</Form.Label>
      <Form.Control type="text" name="zip" value={zip} onChange={e => onInputChange(e)} placeholder="Enter Zip/Postal Code" />
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
