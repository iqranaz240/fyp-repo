import React from 'react';
import AdminNavigation from '../../../components/AdminNavigation';
import VFCRecord from '../../../components/Records/VFCRecord/VFCRecord';

class VFCRecordAD extends React.Component {
render(){
  return(
    <div>
    <AdminNavigation />
    <VFCRecord />
    </div>
  )
}

}
export default VFCRecordAD;