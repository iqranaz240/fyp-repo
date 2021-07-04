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

export default function VaccineRecord(){

  const [vaccine, setVaccine] = useState(['']);
  const [search, setSearch] = useState(['']);
  // const {admin_id} = useParams(); 
  // const admin_id = parseInt(sessionStorage.getItem('admin_id'));

   useEffect(() => {
     getData();
   
    },[]);

    const getData=() =>{
      const apiURL='http://localhost:3001/vaccine';
      axios.get(apiURL)
      // fetch(apiUrl)
        .then((res) => {
          console.log()
          setVaccine(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }

     const thisdelete = (vaccine_id)=>{
      fetch(`http://localhost:3001/vaccine/delete/${vaccine_id}`,
      {method : "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Vaccine has been Deleted");
        getData();
      })
    })
    }
    return( 
        <div>
     
        <div style={{marginTop:150, marginBottom:50}}>
      
        <Container fluid="xs" className="box" >
        
    <Row style={{marginTop:20}} className="justify-content-md-center">
    <Col xl={4}>
    <h1 className="headStyle">Vaccine Record </h1>
    </Col>
    <Col xl={6}>
    <Form inline>
      <FormControl type="text" placeholder="Search" onChange={e=>{setSearch(e.target.value)}}  className="mr-xl-2" />
    
    </Form></Col>
    <Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
     <tr>
       <th>Vaccine_id</th>
       <th>Vaccine Name</th>
       <th>Vaccine Manufacturer</th>
       <th>Vaccine Availability</th>
       <th colspan="3">Action </th>
     </tr>
   </thead>
    <tbody>
    {vaccine.filter((item)=>{
    if(search==""){
      return item
    }else if (item.vaccine_id.toLowerCase().includes(search.toLowerCase())){
      return item
    }
  }).map(item =>(
        <tr  key={item.id}>
          <td>{item.vaccine_id}</td>
          <td>{item.title}</td>
          <td>{item.manf}</td>
          <td>{item.available}</td>
          <td ><Link className="mr-2" to={`/VaccineViewRecord/${item.vaccine_id}`}><VisibilityIcon style={{color: "#41649c"}}/></Link> </td>
          <td ><DeleteRoundedIcon onClick={()=>this.delete(item.vaccine_id)} style={{color: "#41649c"}}/> </td>
          <td><Link className="mr-2"  to={`/VaccineEdit/${item.vaccine_id}`}><EditIcon  style={{color: "#41649c"}}/></Link>
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
