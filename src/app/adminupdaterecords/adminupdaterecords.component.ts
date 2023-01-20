import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-adminupdaterecords',
  templateUrl: './adminupdaterecords.component.html',
  styleUrls: ['./adminupdaterecords.component.css']
})
export class AdminupdaterecordsComponent {

  doctorupdategroup=this.fb.group({
    drname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    newdrname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  surgeryupdategroup=this.fb.group({
    surfees:["",[Validators.required,Validators.pattern('[0-9]*')]],
    newsurfees:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb:FormBuilder,private http:HttpClient){}

  updatedoctor(){
    if(this.doctorupdategroup.valid){
      var drname=this.doctorupdategroup.value.drname
      var newdrname=this.doctorupdategroup.value.newdrname

      const data={
        "drname":drname,
        "newdrname":newdrname
      }
      this.http.post('http://localhost:3000/updatedoctordata',data)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }

      })


    }

  }

  updatesurgery(){
    if(this.surgeryupdategroup.valid){
      var surfees=this.surgeryupdategroup.value.surfees
      var newsurfees= this.surgeryupdategroup.value.newsurfees

      const data={
        "surfees":surfees,
        "newsurfees":newsurfees
      }
      this.http.post('http://localhost:3000/updatesurgerydata',data)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      })

    }

  }
}
