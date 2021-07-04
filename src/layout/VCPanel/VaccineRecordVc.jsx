import React from 'react';
import VCNavigation from '../../components/VCNavigation'
import VaccineRecord from '../../components/Records/VaccineRecord/VaccineRecord';


class VaccineRecordVc extends React.Component {
render(){
  return(
    <div>
    <VCNavigation />
    <VaccineRecord />
    </div>
  )
}

}
export default VaccineRecordVc;