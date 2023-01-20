import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientssdashboard',
  templateUrl: './patientssdashboard.component.html',
  styleUrls: ['./patientssdashboard.component.css']
})
export class PatientssdashboardComponent {
  value:any
  constructor(private route:Router){
    console.log(this.value);
    
  }
  


  home(){
    this.route.navigateByUrl("")
  }

  logout(){
    this.route.navigateByUrl("adminlogin")
  }


  availdoctors(){
    this.route.navigateByUrl("availabledoctor")
  }

  availsurgeries(){
    this.route.navigateByUrl("availablesurgeries")

  }

  medicalreports(){
    this.route.navigateByUrl("patientresult")
  }

}
