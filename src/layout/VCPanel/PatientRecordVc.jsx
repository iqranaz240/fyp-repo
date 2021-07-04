import React from 'react';
import VCNavigation from '../../components/VCNavigation'
import PatientRecord from '../../components/Records/PatientRecord/PatientRecord';

class PatientRecordVc extends React.Component {
render(){
  return(
    <div>
    <VCNavigation />
    <PatientRecord />
    </div>
  )
}

}
export default PatientRecordVc;