import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor (private route:Router){}

  home(){
    this.route.navigateByUrl("")
  }

  logout(){
    this.route.navigateByUrl("adminlogin")
  }

  doctoradd(){
    this.route.navigateByUrl("doctoradd")
  }

  surgeryadd(){
    this.route.navigateByUrl("surgeryadd")
  }

  patientreportadd(){
    this.route.navigateByUrl("patientreportadd")
  }

  deleterecords(){
    this.route.navigateByUrl("admindeleterecords")
  }

  updaterecords(){
    this.route.navigateByUrl("adminupdaterecords")
  }

}
