import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const VC = () => {
    const [vc, setVC] = useState({
        vc_id: '', 
        name:'', 
        email:'',
        password:'',
        address: '',
        phone:'',
        reg_no:'',
        admin_id: '',
        city:'', 
        state:'',
        zip:''

       
});
  const { vc_id } = useParams();
  useEffect(() => {
    loadVC();
  }, []);
  const loadVC = async () => {
    const res = await axios.get(`http://localhost:3001/VCRegistration/search/${vc_id}`);
    setVC(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/VCRecord">
        back 
      </Link>
      <h1 className="display-4">Vaccination Center Id: {vc_id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Vaccination Center Name: {vc.name}</li>
        <li className="list-group-item">Email: {vc.email}</li>
        <li className="list-group-item">Password: {vc.password}</li>
        <li className="list-group-item">Address: {vc.address}</li>
        <li className="list-group-item">PhoneNo: {vc.phone}</li>
        <li className="list-group-item">Registration No: {vc.req_no}</li>
        <li className="list-group-item">City: {vc.city}</li>
        <li className="list-group-item">State: {vc.state}</li>
        <li className="list-group-item">Zip: {vc.zip}</li>
      </ul>
    </div>
  );
};

export default VC;