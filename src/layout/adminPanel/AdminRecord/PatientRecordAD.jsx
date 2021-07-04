import React from 'react';
import AdminNavigation from '../../../components/AdminNavigation';
import PatientRecord from '../../../components/Records/PatientRecord/PatientRecord';

class PatientRecordAD extends React.Component {
render(){
  return(
    <div>
    <AdminNavigation />
    <PatientRecord />
    </div>
  )
}

}
export default PatientRecordAD;