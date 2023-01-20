import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dentodoctordashboard',
  templateUrl: './dentodoctordashboard.component.html',
  styleUrls: ['./dentodoctordashboard.component.css']
})
export class DentodoctordashboardComponent {

  dentopatientarray:any=[]
  dentopatient:any=false
  

  constructor(private route:Router,private http:HttpClient){}

  homepage(){
    this.route.navigateByUrl("")
  }

  logout(){
    this.route.navigateByUrl("doctorlogin")
  }

  dentopatientdetails(){
    this.dentopatient=true
    this.http.post('http://localhost:3000/dentopatients',{})
    .subscribe((result:any)=>{
      this.dentopatientarray=result.result
    })



  }


}
