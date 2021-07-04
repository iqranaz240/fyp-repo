import React,{useState,useEffect} from 'react';
import {Table,Container,Row,Form,FormControl,Button,Col} from 'react-bootstrap';
import '../../../App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 800,
//    marginLeft:300,

//   },

// });

export default function PatientRecord(){

  const [patient, setPatient] = useState(['']);
  const [search, setSearch] = useState(['']);
  // const {admin_id} = useParams(); 
  // const admin_id = parseInt(sessionStorage.getItem('admin_id'));

   useEffect(() => {
     getData();
   
    },[]);

    const getData=() =>{
      const apiURL='http://localhost:3001/patientRegistration';
      axios.get(apiURL)
      // fetch(apiUrl)
        .then((res) => {
          console.log()
          setPatient(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }

     const thisdelete = (patient_id)=>{
      fetch(`http://localhost:3001/patientRegistration/delete/${patient_id}`,
      {method : "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Patient has been Deleted");
        getData();
      })
    })
    }

    return( 
        <div>
        
     
        <div style={{marginTop:200}}>
      
        <Container fluid="xs" className="box" >
        
    <Row style={{marginTop:30}} className="justify-content-md-center">
    <Col xl={5}>
    <h1 className="headStyle">Patient Record </h1>
    </Col>
    <Col xl={6}>
    <Form inline>
      <FormControl type="text" placeholder="Search" onChange={e=>{setSearch(e.target.value)}}  className="mr-xl-2" />
  
    </Form></Col>
    <Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
     <tr>
       <th>Patient_id</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th colspan="3">Action </th>
     </tr>
   </thead>
    <tbody>
    {patient.filter((item)=>{
    if(search==""){
      return item
    }
  else if(search == item.patient_id){
    return item
  }
  }).map(item =>(
        <tr  key={item.id}>
          <td>{item.patient_id}</td>
          <td>{item.f_name}</td>
          <td>{item.l_name}</td>
          <td>{item.email}</td>
          <td ><Link className="mr-2" to={`/PatientViewRecord/${item.patient_id}`}><VisibilityIcon style={{color: "#41649c"}}/></Link> </td>
          <td ><DeleteRoundedIcon onClick={()=>thisdelete(item.patient_id)} style={{color: "#41649c"}}/> </td>
          <td><Link className="mr-2"  to={`/PatientEdit/${item.patient_id}`}><EditIcon  style={{color: "#41649c"}}/></Link>
          </td>        </tr>
          ))}
      </tbody>
  </Table>
  </Col>
  </Row>
  </Container>
  </div>
</div>
    )
}

