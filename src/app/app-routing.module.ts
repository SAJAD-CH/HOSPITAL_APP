import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AvailabledoctorComponent } from './availabledoctor/availabledoctor.component';
import { AvailablesurgeriesComponent } from './availablesurgeries/availablesurgeries.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import { SurgeryaddComponent } from './surgeryadd/surgeryadd.component';
import { OrthodoctordashboardComponent } from './orthodoctordashboard/orthodoctordashboard.component';
import { DentodoctordashboardComponent } from './dentodoctordashboard/dentodoctordashboard.component';
import { PhysiodoctordashboardComponent } from './physiodoctordashboard/physiodoctordashboard.component';
import { CardiodoctordashboardComponent } from './cardiodoctordashboard/cardiodoctordashboard.component';
import { PatientresultComponent } from './patientresult/patientresult.component';
import { PatientssdashboardComponent } from './patientssdashboard/patientssdashboard.component';
import { PatientreportaddComponent } from './patientreportadd/patientreportadd.component';
import { AdmindeleterecordsComponent } from './admindeleterecords/admindeleterecords.component';
import { AdminupdaterecordsComponent } from './adminupdaterecords/adminupdaterecords.component';


const routes: Routes = [
  {path:"",component:MainpageComponent},
  {path:"patientlogin",component:PatientloginComponent},
  {path:"patientregister",component:PatientregisterComponent},
  {path:"patientdashboard",component:PatientdashboardComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"admindashboard",component:AdmindashboardComponent},
  {path:"doctoradd",component:DoctoraddComponent},
  {path:"availabledoctor",component:AvailabledoctorComponent},
  {path:"availablesurgeries",component:AvailablesurgeriesComponent},
  {path:"surgeryadd",component:SurgeryaddComponent},
  {path:"doctorlogin",component:DoctorloginComponent},
  {path:"nuerodoctordashboard",component: DoctordashboardComponent},
  {path:"orthodoctordashboard",component:OrthodoctordashboardComponent},
  {path:"dentodoctordashboard",component:DentodoctordashboardComponent},
  {path:"physiodoctordashboard",component:PhysiodoctordashboardComponent},
  {path:"cardiodoctordashboard",component:CardiodoctordashboardComponent},
  {path:"patientresult",component:PatientresultComponent},
  {path:"patientssdashboard",component:PatientssdashboardComponent},
  {path:"patientreportadd",component:PatientreportaddComponent},
  {path:"admindeleterecords",component:AdmindeleterecordsComponent},
  {path:"adminupdaterecords",component:AdminupdaterecordsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
