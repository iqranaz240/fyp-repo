import React from 'react';
import VCNavigation from '../../../components/VCNavigation'
import {Table,Container,Row,Form,FormControl,Button,Col} from 'react-bootstrap';
import '../../../App.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import DoctorRecord from '../../../Records/DoctorRecord';

class DoctorRecordVc extends React.Component {
render(){
  return(
    <div>
    <VCNavigation />
    {/* <DoctorRecord /> */}
    </div>
  )
}
// constructor(){
//     super();
//     this.state={
//         items:[],
//         isLoaded:false,
//     }
// }
//   componentDidMount() {
//     const apiUrl = 'http://localhost:3001/doctorRegistration';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then(json =>{
//           this.setState({
//               isLoaded:true,
//               items : json
//           })
//       })}
//     //   console.log('This is your data', data));
    
//   render() {
//     var { isLoaded, items} = this.state;
//     if(!isLoaded){
//         return <div>Loading....</div>
//     }
//     else{
//     return( 
//         <div>
//          <VCNavigation />
     
//         <div style={{marginTop:150}}>
      
//         <Container fluid="xs" className="box" style={{marginLeft:130}}>
        
//     <Row style={{marginTop:30}} className="justify-content-md-center">
//     <Col xl={4}>
//     <h1 className="headStyle">Doctor Record </h1>
//     </Col>
//     {/* <Col xl={7}>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-xl-2" />
//       <Button variant="outline-primary">Search</Button>
//     </Form></Col> */}
//     <Col  >
// <Table responsive="sm" style={{marginTop:20}} >
// <thead style={{backgroundColor: "#41649c" , color:"white"}}>
     
//      <tr>
//        <th>Doctor_id</th>
//        <th>Vaccination Center_id</th>
//        <th>First Name</th>
//        <th>Last Name</th>
//        <th>Email</th>
//        <th>Password</th>
//        <th>Address</th>
//        <th>Phone Number</th>
//        <th>Qualification</th>
//        <th>Gender</th>
//        <th>DOB</th>
//        <th>Religion</th>
//        <th>City </th>
//        <th>State </th>
//        <th>Zip </th>
//        {/* <th> </th>
//        <th> </th> */}
//      </tr>
//    </thead>
//     <tbody>
//       {items.map(item =>(
//         <tr  key={item.id}>
//           <td>{item.doctor_id}</td>
//           <td>{item.vc_id}</td>
//           <td>{item.f_name}</td>
//           <td>{item.l_name}</td>
//           <td>{item.email}</td>
//           <td>{item.password}</td>
//           <td>{item.address}</td>
//           <td>{item.phone}</td>
//           <td>{item.qualification}</td>
//           <td>{item.gender}</td>
//           <td>{item.dob}</td>
//           <td>{item.religion}</td>
//           <td>{item.city}</td>
//           <td>{item.state}</td>
//           <td>{item.zip}</td>
//           {/* <td ><DeleteRoundedIcon style={{color: "#41649c"}}/> </td>
//           <td> <EditIcon  style={{color: "#41649c"}}/></td> */}
//         </tr>
//           ))}
//       </tbody>
//   </Table>
//   </Col>
//   </Row>
//   </Container>
//   </div>
// </div>
//     )
// }
//   }
}
export default DoctorRecordVc;