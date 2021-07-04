import React from 'react';
import AdminNavigation from '../../../components/AdminNavigation';
import VaccineRecord from '../../../components/Records/VaccineRecord/VaccineRecord';

class VaccineRecordAD extends React.Component {
render(){
  return(
    <div>
    <AdminNavigation />
    <VaccineRecord />
    </div>
  )
}

}
export default VaccineRecordAD;