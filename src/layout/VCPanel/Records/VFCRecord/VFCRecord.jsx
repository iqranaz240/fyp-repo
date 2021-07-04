import React from 'react';
import AdminNavigation from '../../../components/AdminNavigation';
import {Table,Container,Row,Form,FormControl,Button,Col} from 'react-bootstrap';
import '../../../App.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';

class VFCRecord extends React.Component {

constructor(){
    super();
    this.state={
        items:[],
        isLoaded:false,
    }
}
  componentDidMount() {
    const apiUrl = 'http://localhost:3001/VFRegistration';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(json =>{
          this.setState({
              isLoaded:true,
              items : json
          })
      })}
    //   console.log('This is your data', data));
    
  render() {
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
    <h1 className="headStyle">Verification Center Record </h1>
    </Col>
    {/* <Col xl={9}>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-xl-2" />
      <Button variant="outline-primary">Search</Button>
    </Form></Col> */}
    <Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
     <tr>
       <th>Verification Center_id</th>
       <th>Admin_id</th>
       <th>Center Name</th>
       <th>Email</th>
       <th>Password</th>
       <th>Address</th>
       <th>Phone Number</th>
       <th>Registration Number</th>
       <th>City </th>
       <th>State </th>
       <th>Zip </th>
       {/* <th> </th>
       <th> </th> */}
     </tr>
   </thead>
    <tbody>
      {items.map(item =>(
        <tr  key={item.id}>
          <td>{item.vfc_id}</td>
          <td>{item.admin_id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.reg_no}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.zip}</td>
          {/* <td ><DeleteRoundedIcon style={{color: "#41649c"}}/> </td>
          <td> <EditIcon  style={{color: "#41649c"}}/></td> */}
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
export default VFCRecord;