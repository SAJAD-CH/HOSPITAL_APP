import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PatientloginComponent } from '../patientlogin/patientlogin.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-patientreportadd',
  templateUrl: './patientreportadd.component.html',
  styleUrls: ['./patientreportadd.component.css']
})
export class PatientreportaddComponent {

  patientreport=this.fb.group({
    patientname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    reportid:["",[Validators.required,Validators.pattern('[0-9]*')]],
    testname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    testresult:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    testid:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })
 
  
  constructor (private fb:FormBuilder,private service:ServiceService){}

  patientreportadd(){

    var patientname=this.patientreport.value.patientname
    var reportid=this.patientreport.value.reportid
    var testname=this.patientreport.value.testname
    var testresult=this.patientreport.value.testresult
    var testid=this.patientreport.value.testid

    if(this.patientreport.valid){
      this.service.patientreportadd(patientname,reportid,testname,testresult,testid)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
        
      },(result)=>{
        alert(result.error.message);})


    }
    else{
      alert("not in valid ")
    }


  }




  
  

  



}
