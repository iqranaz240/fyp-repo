import React from 'react';
import AdminNavigation from '../../../components/AdminNavigation';
import DoctorRecord from '../../../components/Records/DoctorRecord/DoctorRecord';

class DoctorRecordAD extends React.Component {
render(){
  return(
    <div>
    <AdminNavigation />
    <DoctorRecord />
    </div>
  )
}

}
export default DoctorRecordAD;