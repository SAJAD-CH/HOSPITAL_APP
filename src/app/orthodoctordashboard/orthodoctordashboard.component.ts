import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orthodoctordashboard',
  templateUrl: './orthodoctordashboard.component.html',
  styleUrls: ['./orthodoctordashboard.component.css']
})
export class OrthodoctordashboardComponent {

  orthopatientarray:any=[]
  orthopatient:any=false

  constructor(private route:Router,private http:HttpClient){}

  homepage(){
    this.route.navigateByUrl("")
  }
  logout(){
    this.route.navigateByUrl("doctorlogin")

  }

  orthopatientdetails(){
    this.orthopatient=true
    this.http.post('http://localhost:3000/orthopatients',{})
    .subscribe((result:any)=>{
      this.orthopatientarray=result.result
    })



  }

}
