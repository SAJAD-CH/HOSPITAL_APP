import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physiodoctordashboard',
  templateUrl: './physiodoctordashboard.component.html',
  styleUrls: ['./physiodoctordashboard.component.css']
})
export class PhysiodoctordashboardComponent {

  physiopatientarray:any=[]
  physiopatient:any=false

  constructor(private route:Router,private http:HttpClient){}

  homepage(){
    this.route.navigateByUrl("")
  }

  logout(){
    this.route.navigateByUrl("doctorlogin")
  }

  physiopatientdetails(){
    this.physiopatient=true
    this.http.post('http://localhost:3000/physiopatients',{})
    .subscribe((result:any)=>{
      if(result){
        this.physiopatientarray=result.result
      }
    })


  }



}
