import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent {

  nueropatientarray:any=[]
  nueropatient:boolean=false

  

  

  constructor(private route:Router,private service:ServiceService,private http:HttpClient){}
  

  homepage(){
    this.route.navigateByUrl("")
  }

  logout(){
    this.route.navigateByUrl("doctorlogin")
  }

  nueropatientdetails(){
    console.log("clicked");
    
    this.nueropatient=true
    this.http.post('http://localhost:3000/nueropatients',{})
    .subscribe((result:any)=>{
      this.nueropatientarray=result.result
    })
  }



  

  

}
