import React,{useState,useEffect} from 'react';
import {Table,Container,Row,Form,FormControl,Col} from 'react-bootstrap';
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

export default function VCRecord(){

  const [vc, setVc] = useState(['']);
  const [search, setSearch] = useState(['']);
  // const {admin_id} = useParams(); 
  // const admin_id = parseInt(sessionStorage.getItem('admin_id'));

   useEffect(() => {
     getData();
   
    },[]);

    const getData=() =>{
      const apiURL='http://localhost:3001/VCRegistration';
      axios.get(apiURL)
      // fetch(apiUrl)
        .then((res) => {
          console.log()
          setVc(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }

     const thisdelete = (vc_id)=>{
      fetch(`http://localhost:3001/VCRegistration/delete/${vc_id}`,
      {method : "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Vaccination Center has been Deleted");
        getData();
      })
    })
    }
    return( 
        <div>
     
        <div style={{marginTop:220}}>
      
        <Container fluid="xs" className="box">
        
    <Row style={{marginTop:30}} className="justify-content-md-center">
    <Col xl={7}>
    <h1 className="headStyle">Vaccination Center Record </h1>
    </Col>
    <Col xl={8}>
    <Form inline>
      <FormControl type="text" placeholder="Search" onChange={e=>{setSearch(e.target.value)}}  className="mr-xl-2" />
    </Form>
    </Col>
    <Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
     <tr>
       <th >Vaccination Center_id</th>
       <th >Center Name</th>
       <th >Email</th>
       {/* <th>Password</th>
       <th>Address</th>
       <th>Phone Number</th>
       <th>Registration Number</th>
       <th>Admin_id</th>
       <th>City </th>
       <th>State </th>
       <th>Zip </th> */}
       <th colspan="3" style={{marginLeft:20}}>Action </th>
       
     </tr>
   </thead>
    <tbody >
    {vc.filter((item)=>{
      if(search==""){
        return item
      }
    else if(search == item.vc_id){
      return item
    }
  // else if (item.vc_id.toLowerCase().includes(search.toLowerCase())){
  //   return item
  // }
  })
 .map(item =>(
        <tr  key={item.id}>
          <td >{item.vc_id}</td>
          <td >{item.name}</td>
          <td>{item.email}</td>
          {/* <td>{item.password}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.reg_no}</td>
          <td>{item.admin_id}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.zip}</td> */}
          <td ><Link className="mr-2" to={`/VCViewRecord/${item.vc_id}`}><VisibilityIcon style={{color: "#41649c"}}/></Link> </td>
          <td ><DeleteRoundedIcon onClick={()=>thisdelete(item.vc_id)} style={{color: "#41649c"}}/> </td>
          <td><Link className="mr-2"  to={`/VCEditRecord/${item.vc_id}`}><EditIcon  style={{color: "#41649c"}}/></Link>
          </td>
        </tr>
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
