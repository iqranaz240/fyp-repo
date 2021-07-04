import React,{useState,useEffect} from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AdminNavigation from '../../components/AdminNavigation';
import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';
import {Row,Col,Image} from 'react-bootstrap';
import logo from '../../assets/image/logo.png';
import Typography from '@material-ui/core/Typography';
import {useParams  } from "react-router-dom";
import {withRouter  } from "react-router";
import loginID from '../AdminLogin';
import axios from 'axios';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 800,
//    marginLeft:300,

//   },

// });
// export default function AdminProfile(props){

 
  // const [admin, setAdmin] = useState(['']);

  // const {admin_id} = useParams();

  export default class AdminProfile extends React.Component {

    constructor(props){
      super(props);
      this.state={
        admin: ['']
      }

    }
   
   componentDidMount(admin_id){
    admin_id = sessionStorage.getItem('admin_id');
   const apiURL=`http://localhost:3001/admin/${parseInt(admin_id)}`
    // axios.get (apiURL,{
    //   headers:{
    //     'Content-Type' : 'application/json'
    //   }
    // })
    fetch(apiURL)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
      admin: responseJson.data });
          console.warn(responseJson)
        })
      .catch(err =>{
        console.log(err)
      })
    

};
   
render(){
  const{admin} = this.state;
  return (
  
<Container>
  <AdminNavigation />
    <Card className="adminCard" >
    
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
   
        
          <Typography style={{fontFamily:'Carter One', fontSize:30,marginLeft:200,marginTop:-50,color:"#fff"}}>
             {admin.name }
           </Typography>
   
   {/* : <p style={{fontSize:50, marginLeft:300}}>No data</p> */}
   
        
        <CardContent>
        <Row>
         <Col xl={4} id="photo">
       <Image src="https://hairstylecamp.com/wp-content/uploads/short-businessmen-haircut.jpg"
        roundedCircle
       style={{width:130,height:130, marginTop:-100,marginLeft:30}}
       />
       <img src={logo} alt=" " style={{height:40,width:40, marginLeft:-50}} />
       <Card style={{marginTop:40,height:250, marginBottom:40}}>
         <CardContent>
           <Typography style={{fontFamily:'Carter One', fontSize:30,marginLeft:20}}>
             Highlights
           </Typography> <hr />
           
         </CardContent>
       </Card>
       <Button style={{marginLeft:60,marginBottom:20}} variant="contained" size="small" color="primary">
          Edit Profile
        </Button>
         </Col>
         <Col xl={8}>
           

           <Card>
           {/* {admin?.map(item =>(
           item.length > 0
           ? */}
           <CardContent  style={{fontSize:17}}>
          
             <p id="admin_id">Admin-ID: <span style={{marginLeft:20}}> {admin.admin_id} </span></p><hr />
             <p id="name">FullName: <span style={{marginLeft:20}}> {admin.name} </span></p><hr />
             <p id="password">Password: <span style={{marginLeft:20}}> {admin.password} </span></p><hr />
             <p id="email">Email: <span style={{marginLeft:20}}>{admin.email} </span> </p><hr />
             <p id="address">Address: <span style={{marginLeft:20}}> {admin.address} </span></p><hr />
             <p id="phone">Phone#: <span style={{marginLeft:20}}> {admin.phone} </span></p><hr />
             <p id="profession">Profession: <span style={{marginLeft:20}}>{admin.profession} </span> </p><hr />
             <p id="gender">Gender: <span style={{marginLeft:20}}>{admin.gender} </span> </p><hr />
             <p id="dob">DOB: <span style={{marginLeft:20}}>{admin.dob} </span> </p><hr />
             <p id="religion">Religion: <span style={{marginLeft:20}}>{admin.religion} </span> </p><hr />
             <p id="city">City: <span style={{marginLeft:20}}> {admin.city} </span></p><hr />
             <p id="state">State:<span style={{marginLeft:20}}>{admin.state} </span> </p>
          

             </CardContent>
             {/* :null
   
   ))} */}
           </Card>
           

         </Col>
         </Row>
        </CardContent>
        
      <CardActions>
        
      </CardActions>
    </Card>
    </Container>
  );
    }
  }
// }
// }
