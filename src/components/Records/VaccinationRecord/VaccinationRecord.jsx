import React,{useState,useEffect} from 'react';
import {Table,Container,Row,Form,FormControl,Col} from 'react-bootstrap';
import '../../../App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';



// const useStyles = makeStyles({
//   root: {
//     maxWidth: 800,
//    marginLeft:300,

//   },

// });

export default function VaccinationRecord(){

  const [vaccination, setVaccination] = useState(['']);
  const [search, setSearch] = useState(['']);
  // const {admin_id} = useParams(); 
  // const admin_id = parseInt(sessionStorage.getItem('admin_id'));

   useEffect(() => {
     getData();
   
    },[]);

    const getData=() =>{
      const apiURL=`http://localhost:3001/vaccination`
      axios.get (apiURL)
      // fetch(apiUrl)
        .then((res) => {
          console.log()
          setVaccination(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }

     const thisdelete = (v_id)=>{
      fetch(`http://localhost:3001/vaccination/delete/${v_id}`,
      {method : "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Vaccination has been Deleted");
        getData();
      })
    })
    }


  return (
   
    <div>
     
    <div style={{marginTop:150}}>
  
    <Container fluid="xs" className="box" >
    
<Row style={{marginTop:30}} className="justify-content-md-center">
<Col xl={5}>
<h1 className="headStyle">Vaccination Record </h1>
</Col>
<Col xl={6}>
<Form inline>
  <FormControl type="text"  onChange={e=>{setSearch(e.target.value)}}  placeholder="Search" id="search"  className="mr-xl-2" />
  {/* <Button variant="outline-primary" onClick={thissearch()}  >Search</Button> */}
  

</Form></Col>
<Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
 
 <tr>
   <th>Vaccination_id</th>
   <th>Patient_id</th>
   <th>Vaccination Center_id</th>
   <th>Vaccine_id</th>
   <th>doctor_id</th>
   <th colspan="3">Action </th>
  
 </tr>
</thead>
<tbody>
  {vaccination.filter((item)=>{
    if(search==""){
      return item
    }
  else if(search == item.v_id){
    return item
  }
  }).map(item =>(
    <tr  key={item.id}>
      <td>{item.v_id}</td>
      <td>{item.patient_id}</td>
      <td>{item.vc_id}</td>
      <td>{item.vaccine_id}</td>
      <td>{item.doctor_id}</td>
      
      <td><Link className="mr-2" to={`/VaccinationViewRecord/${item.v_id}`} ><VisibilityIcon style={{color: "#41649c"}}/></Link> </td>
      <td><Link className="mr-2"  to={`/VaccinationEdit/${item.v_id}`}><EditIcon  style={{color: "#41649c"}}/></Link></td>
      <td><Link className="mr-2" onClick={()=>thisdelete(item.v_id)} ><DeleteRoundedIcon style={{color: "#41649c"}}/></Link>  </td>
      
    </tr>
      ))}
  </tbody>
 
</Table>
</Col>

</Row>
</Container>
</div>
</div>
  );
    }
// }
// }
