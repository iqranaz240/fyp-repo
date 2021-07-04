import React, {useState} from "react";
import axios from 'axios';
import '../App.css'
import { Card, Container,Button,Form } from "react-bootstrap";
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
// import Login from '../layout/Login';


export default function ForgotPassword(props){
  
 
    const history= useHistory();
  
    
    const [id, setAdmin_id] = useState("");
    const ad_id=id.slice(0,3);
    const admin_id=id.slice(3,);
    console.log(admin_id);
    sessionStorage.setItem('admin_id', admin_id);
    console.log(sessionStorage);
    const [password, setPassword] = useState("");

    


    const [loginStatus, setLoginStatus] = useState("");

    const login = ()=>{

      switch (ad_id) {
        case "adm":
         
      if(!admin_id || !password){
        alert("Provide id/password");
      }
      else{
      axios.put("http://localhost:3001/admin/update",{
        admin_id : admin_id,
        password : password,
      }).then((response)=>{
       if(response.data.message){
       alert("Please Provide correct id/password")
         setLoginStatus(response.data.message);
         }else{
         setLoginStatus(response.data[0].admin_id);
        //  props.history.push('/AdminDashboard')
        alert("Password Updated")
       }
      
      });
    }
   
    break;
    case "vcc" :
      if(!admin_id || !password){
        alert("Provide id/password");
      }
      else{
      axios.put("http://localhost:3001/VCRegistration/updatePass",{
        admin_id : admin_id,
        password : password,
      }).then((response)=>{
       if(response.data.message){
       alert("Please Provide Correct id/password")
         setLoginStatus(response.data.message);
        
       }else{
         setLoginStatus(response.data[0].admin_id);
        //  props.history.push('/VCDashboard')
        alert("Password Updated")
       }
     
      });
    }
    break;
    
    case "vfc":
      if(!admin_id || !password){
        alert("Provide id/password");
      }
      else{
      axios.put("http://localhost:3001/VFRegistration/update",{
        admin_id :  admin_id,
        password : password,
      }).then((response)=>{
       if(response.data.message){
       alert("Please Provide id/password")
         setLoginStatus(response.data.message);
        
       }else{
         setLoginStatus(response.data[0].admin_id);
        //  props.history.push('/VerificationDashboard')
        alert("Password Updated");
       }
     
      });
    }
 break;
  case "doc":

    if(!admin_id || !password){
      alert("Provide id/password");
    }
    else{
    axios.put("http://localhost:3001/doctorRegistration/update",{
      admin_id : admin_id,
      password : password,
    }).then((response)=>{
     if(response.data.message){
     alert("Please Provide id/password")
       setLoginStatus(response.data.message);
      
     }else{
       setLoginStatus(response.data[0].admin_id);
      //  props.history.push('/DoctorDashboard')
      alert("Password Updated");
     }
   
    });
  }
  break;
 
   case "ver":
    if(!admin_id || !password){
      alert("Provide id/password");
    }
    else{
    axios.put("http://localhost:3001/verifier/update",{
      admin_id : admin_id,
      password : password,
    }).then((response)=>{
     if(response.data.message){
     alert("Please Provide id/password")
       setLoginStatus(response.data.message);
      
     }else{
       setLoginStatus(response.data[0].admin_id);
      //  props.history.push('/VerifierDashboard')
      alert("Password Updated");
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
  
  <Card.Body>
    <Card.Title className="cardTitle">Reset Password</Card.Title>
    <Card.Text>
    <Form>
  <Form.Group controlId="formBasicIDl">
    {/* <Form.Label className="formLabel">ID</Form.Label> */}
    <Form.Control type="text" onChange={(e)=>{setAdmin_id(e.target.value)}}    placeholder="Enter ID" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    {/* <Form.Label className="formLabel">Password</Form.Label> */}
    <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder="New Password" />
  </Form.Group>

</Form>
    </Card.Text>
    <Button onClick={login} className="loginBtn" variant="primary">Reset</Button>
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