import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent {

  loginform=this.fb.group({
    doctorname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    doctorid:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb:FormBuilder,private service:ServiceService,private route:Router){}


  login(){
    var drname=this.loginform.value.doctorname
    var drid=this.loginform.value.doctorid

    if(this.loginform.valid){
      this.service.doctorlogin(drname,drid)
      .subscribe((result:any)=>{
        if(result.drid==1000 ){
          alert(result.message)
          this.route.navigateByUrl("nuerodoctordashboard")
        }
        else if(result.drid==1001){
          alert(result.message)
          this.route.navigateByUrl("orthodoctordashboard")
        }
        else if(result.drid==1002){
          alert(result.message)
          this.route.navigateByUrl("dentodoctordashboard")
        }
        else if(result.drid==1003){
          alert(result.message)
          this.route.navigateByUrl("physiodoctordashboard")
        }
        else if(result.drid==1004){
          alert(result.message)
          this.route.navigateByUrl("cardiodoctordashboard")
        }
        else{
          alert("incorrect password")
        }
      },(result)=>{
        alert(result.error.message);})



    }
    else{
      alert("type in valid format")
    }
  }





}
