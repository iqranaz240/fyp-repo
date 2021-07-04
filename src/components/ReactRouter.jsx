import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Welcome from '../layout/Welcome';
import AdminLogin from '../layout/AdminLogin';
import  AdminProfile from '../layout/adminPanel/AdminProfile';
import AdminDashboard from '../layout/adminPanel/adminDashboard';
import  VCRegistration from '../layout/adminPanel/VCRegistration';
import  VFCRegistration from '../layout/adminPanel/VFCRegistration';
import VaccineRegistration from '../layout/VCPanel/VaccineRegistration';
import DoctorRegistration from '../layout/VCPanel/DoctorRegistration';
import PatientRegistration from '../layout/VCPanel/PatientRegistration';
import VCDashboard from '../layout/VCPanel/VCDashboard';
import VerifierDashboard from '../layout/VerifierPanel/VerifierDashboard';
import VerifyPatientRecords from '../layout/VerifierPanel/VerifyPatientRecord';
import DoctorDashboard from '../layout/DoctorPanel/DoctorDashboard';
import Patient from '../layout/DoctorPanel/Patient';
import VerificationDashboard from '../layout/VerificationPanel/VerificationDashboard';
import VerifierRegistration from '../layout/VerificationPanel/VerifierRegistration';
import VerifierRecordAD from "../layout/adminPanel/AdminRecord/VerifierRecordAD";
import DoctorRecordAD from "../layout/adminPanel/AdminRecord/DoctorRecordAD";
import PatientRecordAD from "../layout/adminPanel/AdminRecord/PatientRecordAD";
import VaccineRecordAD from "../layout/adminPanel/AdminRecord/VaccineRecordAD";
import VFCRecordAD from "../layout/adminPanel/AdminRecord/VFCRecordAD";
import VCRecordAD from  "../layout/adminPanel/AdminRecord/VCRecordAD";
import DoctorRecordVc from "../layout/VCPanel/DoctorRecordVc";
import VaccinationEdit from "../components/Records/VaccinationRecord/edit";
import VerificationEdit from "../components/Records/VerificationRecord/VerificationEdit";
import VaccineEdit from "../components/Records/VaccineRecord/VaccineEdit";
import PatientEdit from "../components/Records/PatientRecord/PatientEdit";
import DoctorEdit from "../components/Records/DoctorRecord/DoctorEdit";
import ForgotPassword from "../layout/ForgotPassword";
import VFCEdit from "../components/Records/VFCRecord/VFCEdit";
import VerifierEdit from "../components/Records/VerifierRecord/VerifierEdit";
import VaccineRecordVc from "../layout/VCPanel/VaccineRecordVc";
import VerifierRecordVfc from "../layout/VerificationPanel/VerifierRecord";
import PatientRecordVc from "../layout/VCPanel/PatientRecordVc";
import VaccinationRecordAD from "../layout/adminPanel/AdminRecord/VaccinationRecordAD";
import VerificationRecordAD from "../layout/adminPanel/AdminRecord/VerificationRecordAD";
import VaccinationRecordDoc from '../layout/DoctorPanel/VaccinationRecordDoc';
import VerificationRecordVer from '../layout/VerifierPanel/VerificationRecordVer';
import VCEditRecord from '../components/Records/VCRecord/VCEditRecord';
import VCViewRecord from '../components/Records/VCRecord/VCViewRecord';
import VFCViewRecord from '../components/Records/VFCRecord/VFCViewRecord';
import VerifierViewRecord from '../components/Records/VerifierRecord/VerifierViewRecord';
import PatientViewRecord from '../components/Records/PatientRecord/PatientViewRecord';
import VaccineViewRecord from '../components/Records/VaccineRecord/VaccineViewRecord';
import DoctorViewRecord from '../components/Records/DoctorRecord/DoctorViewRecord';
import VaccinationViewRecord from '../components/Records/VaccinationRecord/VaccinationViewRecord';
import VerificationViewRecord from '../components/Records/VerificationRecord/VerificationViewRecord';


export default function ReactRouter(){
return(
<Router>
<Switch>
<Route exact path="/" component={Welcome} />
<Route path="/AdminLogin" component={AdminLogin} />
<Route path="/ForgotPassword" component={ForgotPassword} />
<Route path="/AdminDashboard" component={AdminDashboard} />
<Route path="/AdminProfile/:admin_id" render={(props) => <AdminProfile {...props} />} />
<Route path="/VCRegistration" component={VCRegistration} />
<Route path="/VFCRegistration" component={VFCRegistration} />
<Route path="/VaccineRegistration" component={VaccineRegistration} />
<Route path="/PatientRegistration" component={PatientRegistration} />
<Route path="/DoctorRegistration" component={DoctorRegistration} />
<Route path="/Patient" component={Patient} />
<Route path="/DoctorDashboard" component={DoctorDashboard} />
<Route path="/VCDashboard" component={VCDashboard} />
<Route path= "/VCViewRecord/:vc_id" component ={VCViewRecord}/>
<Route path= "/VaccineViewRecord/:vaccine_id" component ={VaccineViewRecord}/>
<Route path= "/VaccinationViewRecord/:v_id" component ={VaccinationViewRecord}/>
<Route path= "/PatientViewRecord/:patient_id" component ={PatientViewRecord}/>
<Route path= "/VFCViewRecord/:vfc_id" component ={VFCViewRecord}/>
<Route path= "/VerifierViewRecord/:verifier_id" component ={VerifierViewRecord}/>
<Route path= "/VerificationViewRecord/:vn_id" component ={VerificationViewRecord}/>
<Route path= "/DoctorViewRecord/:doctor_id" component ={DoctorViewRecord}/>
<Route path="/VerifierDashboard" component={VerifierDashboard} />
<Route path="/VerifyPatientRecords" component={VerifyPatientRecords} />
<Route path="/VerificationDashboard" component={VerificationDashboard} />
<Route path="/VerifierRegistration" component={VerifierRegistration} />
<Route path="/VerifierRecordAD" component={VerifierRecordAD} />
<Route path="/VaccineRecordAD" component={VaccineRecordAD} />
<Route path="/VCRecordAD" component={VCRecordAD} />
<Route path="/VaccinationEdit" component={VaccinationEdit} />
<Route path="/VFCEdit" component={VFCEdit} />
<Route path="/VCEditRecord" component={VCEditRecord} />
<Route path="/VerifierEdit" component={VerifierEdit} />
<Route path="/VerificationEdit" component={VerificationEdit} />
<Route path="/VaccineEdit" component={VaccineEdit} />
<Route path="/DoctorEdit" component={DoctorEdit} />
<Route path="/PatientEdit" component={PatientEdit} />
<Route path="/VFCRecordAD" component={VFCRecordAD} />
<Route path="/PatientRecordAD" component={PatientRecordAD} />
<Route path="/DoctorRecordAD" component={DoctorRecordAD} />
<Route path="/DoctorRecordVc" component={DoctorRecordVc} />
<Route path="/VerifierRecordVfc" component={VerifierRecordVfc} />
<Route path="/VaccineRecordVc" component={VaccineRecordVc} />
<Route path="/PatientRecordVc" component={PatientRecordVc} />
<Route path="/VaccinationRecordAD" component={VaccinationRecordAD} />
<Route path="/VaccinationRecordDoc" component={VaccinationRecordDoc} />
<Route path="/VerificationRecordVer" component={VerificationRecordVer} />
<Route path="/VerificationRecordAD" component={VerificationRecordAD} />


</Switch>
</Router>
);
}