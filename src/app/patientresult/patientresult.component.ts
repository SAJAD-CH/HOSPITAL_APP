import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-patientresult',
  templateUrl: './patientresult.component.html',
  styleUrls: ['./patientresult.component.css']
})
export class PatientresultComponent {

  reportidd:any=false
  reportarray:any=[]

  reportidgroup=this.fb.group({
    reportid:["",[Validators.required,Validators.pattern('[0-9]*')]]

  })
  

  
  constructor(private fb:FormBuilder,private service:ServiceService,private route:Router){}

  homepage(){
    this.route.navigateByUrl("patientssdashboard")

  }
  appoinmentpage(){
    this.route.navigateByUrl("availabledoctor")
  }
  logout(){

  }

  

  reportidsubmit(){

    var reportid=this.reportidgroup.value.reportid
    
    this.reportidd=true
    console.log("clicked");
    if(this.reportidgroup.valid)
    {
      this.service.reportidservice(reportid)      
     .subscribe((result:any)=>{
      if(result){
        console.log(result);
        this.reportarray=result.result

      }
     })

    }
    else{
      alert("type in valid format")
    }
    




  }

}
