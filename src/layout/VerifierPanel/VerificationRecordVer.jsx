import React from 'react';
import VerifierNavigation from '../../components/VerifierNavigation';
import VerificationRecord from '../../components/Records/VerificationRecord/VerificationRecord';

class VerificationRecordVer extends React.Component {
render(){
  return(
    <div>
    <VerifierNavigation />
    <VerificationRecord />
    </div>
  )
}

}
export default VerificationRecordVer;