import React from 'react';
import AdminNavigation from '../../../components/AdminNavigation';
import VaccinationRecord from '../../../components/Records/VaccinationRecord/VaccinationRecord';

class VaccinationRecordAD extends React.Component {
render(){
  return(
    <div>
    <AdminNavigation />
    <VaccinationRecord />
    </div>
  )
}

}
export default VaccinationRecordAD;