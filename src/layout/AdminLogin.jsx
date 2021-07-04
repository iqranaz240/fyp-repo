import React, {useState} from "react";
import axios from 'axios';
import '../App.css'
import { Card, Container,Button,Form } from "react-bootstrap";
import Header from '../components/Header';
import {useHistory,useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
// import Login from '../layout/Login';


// export const getAdmin_ID = async () =>{
//   try {
//     var admin = await sessionStorage.getItem('admin_id');
//      alert(admin)
//    }
//    catch{
//        alert(admin)
//    }
// }

export function loginID(){
  
  const admin_id = parseInt(sessionStorage.getItem('admin_id'));
  console.log("propAdmin = " + admin_id)
  // var {id} = parseInt(props.admin_id);
  // const adminURL = `http://localhost:3001/admin`
  // fetch(adminURL)
  // .then(res => console.log("admin_id = " + " " + adminURL))
  // .catch(error =>{
  //   console.log(error);
  // })
  // alert(adminURL)
}


export default function AdminLogin(props){
  
  
    const history= useHistory();

    
    const [id, setAdmin_id] = useState("");
    const ad_id=id.slice(0,3);
    const admin_id=id.slice(3,);
    console.log(admin_id);
   
    
    //   const propAdmin = admin_id
    // console.log("admin_id= " + " " + propAdmin);
  
   
    const [password, setPassword] = useState("");

  

    const [loginStatus, setLoginStatus] = useState("");

    const login = ()=>{

     
      switch (ad_id) {
        case "adm":
         
      if(!admin_id || !password){
        alert("Provide id/password");
      }
      else{
      axios.post("http://localhost:3001/admin/login",{
        admin_id : admin_id,
        password : password,
      }).then((response)=>{
       if(response.data.message){
       alert("Please Provide correct id/password")
         setLoginStatus(response.data.message);
         }else{
         setLoginStatus(response.data[0].admin_id);
         props.history.push('/AdminDashboard',{
          admin_id : sessionStorage.setItem('admin_id', admin_id)
         })
      
       }
      
      });
    }
   
    break;
    case "vcc" :
      if(!admin_id || !password){
        alert("Provide id/password");
      }
      else{
      axios.post("http://localhost:3001/VCRegistration/login",{
        admin_id : admin_id,
        password : password,
      }).then((response)=>{
       if(response.data.message){
       alert("Please Provide Correct id/password")
         setLoginStatus(response.data.message);
        
       }else{
         setLoginStatus(response.data[0].admin_id);
         props.history.push('/VCDashboard')
       }
     
      });
    }
    break;
    
    case "vfc":
      if(!admin_id || !password){
        alert("Provide id/password");
      }
      else{
      axios.post("http://localhost:3001/VFRegistration/login",{
        admin_id :  admin_id,
        password : password,
      }).then((response)=>{
       if(response.data.message){
       alert("Please Provide id/password")
         setLoginStatus(response.data.message);
        
       }else{
         setLoginStatus(response.data[0].admin_id);
         props.history.push('/VerificationDashboard')
       }
     
      });
    }
 break;
  case "doc":

    if(!admin_id || !password){
      alert("Provide id/password");
    }
    else{
    axios.post("http://localhost:3001/doctorRegistration/login",{
      admin_id : admin_id,
      password : password,
    }).then((response)=>{
     if(response.data.message){
     alert("Please Provide id/password")
       setLoginStatus(response.data.message);
      
     }else{
       setLoginStatus(response.data[0].admin_id);
       props.history.push('/DoctorDashboard')
     }
   
    });
  }
  break;
 
   case "ver":
    if(!admin_id || !password){
      alert("Provide id/password");
    }
    else{
    axios.post("http://localhost:3001/verifier/login",{
      admin_id : admin_id,
      password : password,
    }).then((response)=>{
     if(response.data.message){
     alert("Please Provide id/password")
       setLoginStatus(response.data.message);
      
     }else{
       setLoginStatus(response.data[0].admin_id);
       props.history.push('/VerifierDashboard')
     }
   
    });
  }
  break;


    }
    
    
         
  }
 
    //   if(!admin_id || !password){
    //     alert("Provide id/password");
    //   }
    //   else{
    //   axios.post("http://localhost:3001/admin/login",{
    //     admin_id : admin_id,
    //     password : password,
    //   }).then((response)=>{
    //    if(response.data.message){
    //    alert("Please Provide correct id/password")
    //      setLoginStatus(response.data.message);
    //      }else{
    //      setLoginStatus(response.data[0].admin_id);
    //      props.history.push('/AdminDashboard')
    //    }
      
    //   });
    // }



    return(
    
 
        <div>
          
             <Header />
        <Container fuild="xl">
            <Card className="myCard">
  {/* <Card.Header>
  <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/AdminLogin" active>Admin</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/VCLogin">Vaccination Center</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/VerificationLogin" >
          Verification Center
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/VerifierLogin">
          Verifier
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/DoctorLogin">
          Doctor
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header> */}
  <Card.Body>
    <Card.Title className="cardTitle">Login</Card.Title>
    <Card.Text>
    <Form>
  <Form.Group controlId="formBasicIDl">
    {/* <Form.Label className="formLabel">ID</Form.Label> */}
    <Form.Control type="text" onChange={(e)=>{setAdmin_id(e.target.value)}}    placeholder="Enter ID" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    {/* <Form.Label className="formLabel">Password</Form.Label> */}
    <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" />
  </Form.Group>
  <Grid container>
            <Grid item xs>
              <Link href="/ForgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            </Grid>
</Form>
    </Card.Text>
    <Button onClick={login}  className="loginBtn" variant="primary"
    
    >Login</Button>
  </Card.Body>
  
</Card>

        </Container>
        </div>
    )
}


// import React from "react";
// import Header from '../components/Header';
// import Login from '../layout/Login';
// import '../App.css';

// export default function AdminLogin(){

//   return(
//     <div>
//       <Header />
//       <Login />
//     </div>
//   )
// }