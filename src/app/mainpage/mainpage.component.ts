import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  constructor(private route:Router){}

  patient(){
    this.route.navigateByUrl("patientlogin")

  }

  doctor(){
    this.route.navigateByUrl("doctorlogin")
  }

  admin(){
    this.route.navigateByUrl("adminlogin")
  }

}
