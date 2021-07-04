import React from 'react';
import VCNavigation from '../../components/VCNavigation';
import DoctorRecord from '../../components/Records/DoctorRecord/DoctorRecord';

class DoctorRecordVc extends React.Component {
render(){
  return(
    <div>
    <VCNavigation />
    <DoctorRecord />
    </div>
  )
}

}
export default DoctorRecordVc;