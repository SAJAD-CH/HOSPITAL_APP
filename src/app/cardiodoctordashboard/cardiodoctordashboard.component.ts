import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardiodoctordashboard',
  templateUrl: './cardiodoctordashboard.component.html',
  styleUrls: ['./cardiodoctordashboard.component.css']
})
export class CardiodoctordashboardComponent {

  cardiopatientarray:any=[]
  cardiopatient:any=false

  constructor(private route:Router,private http:HttpClient){}

  homepage(){
    this.route.navigateByUrl("")
  }

  logout(){
    this.route.navigateByUrl("doctorlogin")
  }

  cardiopatientdetails(){
    this.cardiopatient=true
    this.http.post('http://localhost:3000/cardiopatients',{})
    .subscribe((result:any)=>{
      if(result){
        this.cardiopatientarray=result.result
      }
    })
}


}
