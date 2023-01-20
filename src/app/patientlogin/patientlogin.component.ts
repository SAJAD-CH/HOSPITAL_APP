import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientdashboardComponent } from '../patientdashboard/patientdashboard.component';
import { PatientreportaddComponent } from '../patientreportadd/patientreportadd.component';
import { PatientssdashboardComponent } from '../patientssdashboard/patientssdashboard.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent {

  firstname:any

  loginform=this.fb.group({
    email:["",],
    password:["",]

  })

  constructor(private route:Router,private fb:FormBuilder,private service:ServiceService,){}

  login(){
      var email = this.loginform.value.email
      var password=this.loginform.value.password

      if(this.loginform.valid){
        this.service.login(email,password)
        .subscribe((result:any)=>{
          if(result){
        
        
        
            alert(result.message)
            this.route.navigateByUrl("patientssdashboard")
          }
        },(result)=>{
          console.log("test",result.error.message)     //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
          alert(result.error.message);})

      }
      else{
        alert("not in valid type")
      }

  }

  register(){
    this.route.navigateByUrl("patientregister") 
  }

}
