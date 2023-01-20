import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import {HttpClientModule} from '@angular/common/http';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';
import { AvailabledoctorComponent } from './availabledoctor/availabledoctor.component';
import { AvailablesurgeriesComponent } from './availablesurgeries/availablesurgeries.component';
import { SurgeryaddComponent } from './surgeryadd/surgeryadd.component';
import { AppointmentpageComponent } from './appointmentpage/appointmentpage.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { OrthodoctordashboardComponent } from './orthodoctordashboard/orthodoctordashboard.component';
import { DentodoctordashboardComponent } from './dentodoctordashboard/dentodoctordashboard.component';
import { PhysiodoctordashboardComponent } from './physiodoctordashboard/physiodoctordashboard.component';
import { CardiodoctordashboardComponent } from './cardiodoctordashboard/cardiodoctordashboard.component';
import { PatientresultComponent } from './patientresult/patientresult.component';
import { PatientssdashboardComponent } from './patientssdashboard/patientssdashboard.component';
import { PatientreportaddComponent } from './patientreportadd/patientreportadd.component';
import { AdmindeleterecordsComponent } from './admindeleterecords/admindeleterecords.component';
import { AdminupdaterecordsComponent } from './adminupdaterecords/adminupdaterecords.component';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PatientloginComponent,
    PatientregisterComponent,
    PatientdashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    DoctoraddComponent,
    AvailabledoctorComponent,
    AvailablesurgeriesComponent,
    SurgeryaddComponent,
    AppointmentpageComponent,
    DoctorloginComponent,
    DoctordashboardComponent,
    OrthodoctordashboardComponent,
    DentodoctordashboardComponent,
    PhysiodoctordashboardComponent,
    CardiodoctordashboardComponent,
    PatientresultComponent,
    PatientssdashboardComponent,
    PatientreportaddComponent,
    AdmindeleterecordsComponent,
    AdminupdaterecordsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
