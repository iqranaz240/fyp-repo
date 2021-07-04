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

export default function VerificationRecord(){

  const [verification, setVerification] = useState(['']);
  const [search, setSearch] = useState(['']);
  // const {admin_id} = useParams(); 
  // const admin_id = parseInt(sessionStorage.getItem('admin_id'));

   useEffect(() => {
     getData();
   
    },[]);

    const getData=() =>{
      const apiURL='http://localhost:3001/verification';
      axios.get(apiURL)
      // fetch(apiUrl)
        .then((res) => {
          console.log()
          setVerification(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }

     const thisdelete = (vn_id)=>{
      fetch(`http://localhost:3001/verification/delete/${vn_id}`,
      {method : "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Verification has been Deleted");
        getData();
      })
    })
    }
    return( 
        <div>
     
        <div style={{marginTop:150}}>
      
        <Container fluid="xs" className="box" >
        
    <Row style={{marginTop:30}} className="justify-content-md-center">
    <Col xl={5}>
    <h1 className="headStyle">Verification Record </h1>
    </Col>
    <Col xl={6}>
    <Form inline>
      <FormControl type="text" placeholder="Search" onChange={e=>{setSearch(e.target.value)}}  className="mr-xl-2" />
    </Form>
    </Col>
    <Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
     <tr>
       <th>Verification_id</th>
       <th>Verifier_id</th>
       <th>Verification Center_id</th>
       <th>Patient_id</th>
       <th colspan="3">Action </th>
     </tr>
   </thead>
    <tbody>
    {verification.filter((item)=>{
      if(search==""){
        return item
      }
    else if(search == item.vn_id){
      return item
    }
  }).map(item =>(
        <tr  key={item.id}>
          <td>{item.vn_id}</td>
          <td>{item.verifier_id}</td>
          <td>{item.vfc_id}</td>
          <td>{item.patient_id}</td>
          <td ><Link className="mr-2" to={`/VerificationViewRecord/${item.vn_id}`}><VisibilityIcon style={{color: "#41649c"}}/></Link> </td>
          <td ><DeleteRoundedIcon onClick={()=>thisdelete(item.vn_id)} style={{color: "#41649c"}}/> </td>
          <td><Link className="mr-2"  to={`/VerificationEdit/${item.vn_id}`}><EditIcon  style={{color: "#41649c"}}/></Link>
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
