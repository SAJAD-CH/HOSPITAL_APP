import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-surgeryadd',
  templateUrl: './surgeryadd.component.html',
  styleUrls: ['./surgeryadd.component.css']
})
export class SurgeryaddComponent {

  surgeryform=this.fb.group({
    surname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    drname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    surfees:["",[Validators.required,Validators.pattern('[0-9]*')]],
    surduration:["",],
    surid:["",[Validators.required,Validators.pattern('[0-9]*')]],
    appid:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb :FormBuilder,private service:ServiceService){}

  surgeryadd(){
    var surname=this.surgeryform.value.surname
    var drname=this.surgeryform.value.drname
    var surfees=this.surgeryform.value.surfees
    var surduration=this.surgeryform.value.surduration
    var surid=this.surgeryform.value.surid
    var appid=this.surgeryform.value.appid


    if(this.surgeryform.valid){
      this.service.surgeryadd(surname,drname,surfees,surduration,surid,appid)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },(result)=>{
        console.log("test",result.error.message)     //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
        alert(result.error.message);})

    }
    else{
      alert("not in valid format")
    }
  }






}
