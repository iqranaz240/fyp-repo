import React from 'react';
import VFCNavigation from '../../components/VFCNavigation';
import VerifierRecord from '../../components/Records/VerifierRecord/VerifierRecord';

class VerifierRecordVfc extends React.Component {
render(){
  return(
    <div>
    <VFCNavigation />
    <VerifierRecord />
    </div>
  )
}

}
export default VerifierRecordVfc;