import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admindeleterecords',
  templateUrl: './admindeleterecords.component.html',
  styleUrls: ['./admindeleterecords.component.css']
})
export class AdmindeleterecordsComponent {

  doctordeletegroup=this.fb.group({
    drname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  deletesurgerygroup=this.fb.group({
    surid:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  deletereportgroup=this.fb.group({
    testid:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })



  constructor(private fb :FormBuilder,private http:HttpClient){}

  deletedoctor(){
    if(this.doctordeletegroup.valid){
      var drname=this.doctordeletegroup.value.drname
      
      this.http.delete(`http://localhost:3000/deletedoctordata/${drname}`)
      .subscribe((result:any)=>{
        alert(result.message)
      },(result:any)=>{
        alert(result.error.message)
      })

    }
    else{
      alert("enter in valid format")
    }
  }

  deletesurgery(){
    console.log("CLICKED");
    
    if(this.deletesurgerygroup.valid){
      var surid=this.deletesurgerygroup.value.surid
      this.http.delete(`http://localhost:3000/deletesurgerydata/${surid}`)
      .subscribe((result:any)=>{
        alert(result.message)
      },(result:any)=>{
        alert(result.error.message)
      })

    }
    else{
      alert("you should only type in numbers")
    }
  }

  deletereport(){
    if(this.deletereportgroup.valid){
      var testid=this.deletereportgroup.value.testid
      this.http.delete(`http://localhost:3000/deletereportdata/${testid}`)
      .subscribe((result:any)=>{
        alert(result.message)
      },(result:any)=>{
        alert(result.error.message)
      })

    }
    else{
      alert("enter in valid format")
    }

  }




}
