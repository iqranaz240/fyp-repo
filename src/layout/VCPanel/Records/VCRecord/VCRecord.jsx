import React from 'react';
import axios from "axios";
import AdminNavigation from '../../../components/AdminNavigation';
import {Table,Container,Row,Form,FormControl,Button,Col} from 'react-bootstrap';
import '../../../App.css';
import { Link } from "react-router-dom";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

class VCRecord extends React.Component {

constructor(){
    super();
    this.state={
        items:[],
        isLoaded:false,
        showAlert: false,
			alertMsg: "",
			alertType: "success",
			id: "",
			update: false
    }
}
  componentDidMount() {
    const apiUrl = 'http://localhost:3001/VCRegistration';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(json =>{
          this.setState({
              isLoaded:true,
              items : json
          })
      })}
    //   console.log('This is your data', data));
   
    // delete(vc_id) {
    //   const { items } = this.state;
  
    //   const apiUrl = 'http://localhost:3001/VCRegistration/delete/'+ vc_id;
    //   const formData = new FormData();
    //   formData.append('vc_id', vc_id);
  
    //   const options = {
    //     method: 'DELETE',
    //     body: formData
    //   }
  
    //   fetch(apiUrl, options)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           response: result,
    //           items: items.filter(item => item.vc_id !== vc_id)
    //         });
    //       },
    //       (error) => {
    //         this.setState({ error });
    //       }
    //     )
    // }
  
    delete = (vc_id) => {
      fetch("http://localhost:3001/VCRegistration/delete" + vc_id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          this.setState({
            showAlert: true,
            alertMsg: result.response,
            alertType: "danger",
          });
          
        })
        .catch((error) => console.log("error", error));
    };
      render() 
  
  {
 
    var { isLoaded, items} = this.state;
    if(!isLoaded){
        return <div>Loading....</div>
    }
    else{
    return( 
        <div>
         <AdminNavigation />
     
        <div style={{marginTop:150}}>
      
        <Container fluid="xs" className="box" >
        
    <Row style={{marginTop:30}} className="justify-content-md-center">
    <Col xl={6}>
    <h1 className="headStyle">Vaccination Center Record </h1>
    </Col>
    {/* <Col xl={7}>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-xl-2" />
      <Button variant="outline-primary">Search</Button>
    </Form></Col> */}
    <Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
     <tr>
       <th>Vaccination Center_id</th>
       <th>Center Name</th>
       <th>Email</th>
       <th>Password</th>
       <th>Address</th>
       <th>Phone Number</th>
       <th>Registration Number</th>
       <th>Admin_id</th>
       <th>City </th>
       <th>State </th>
       <th>Zip </th>
       {/* <th>Action </th> */}
       
     </tr>
   </thead>
    <tbody>
      {items.map(item =>(
        <tr  key={item.id}>
          <td>{item.vc_id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.reg_no}</td>
          <td>{item.admin_id}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.zip}</td>
          <td >
          {/* <Link className="mr-2" ><VisibilityIcon style={{color: "#41649c"}}/></Link> 
          <Link className="mr-2" ><EditIcon  style={{color: "#41649c"}}/></Link> */}
          <span className="mr-2" onClick={()=>this.delete(item.vc_id)}><DeleteRoundedIcon style={{color: "#41649c"}}/></span>  </td>
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
  }
}
export default VCRecord;