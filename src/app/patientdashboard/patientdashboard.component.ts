import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent {

  constructor(private route:Router){}


  availdoctors(){
    this.route.navigateByUrl("availabledoctor")
  }

}
