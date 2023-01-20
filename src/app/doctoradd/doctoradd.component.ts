import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctoradd',
  templateUrl: './doctoradd.component.html',
  styleUrls: ['./doctoradd.component.css']
})
export class DoctoraddComponent {

  addform=this.fb.group({
    drname:["",],
    spl:["",],
    exp:["",],
    drid:[""],
    appid:["",]
  })



  constructor(private fb:FormBuilder,private service:ServiceService){}

  doctoradd(){

    var drname=this.addform.value.drname
    var spl=this.addform.value.spl
    var exp=this.addform.value.exp
    var drid=this.addform.value.drid
    var appid=this.addform.value.appid

    if(this.addform.valid){
      this.service.doctoradd(drname,spl,exp,drid,appid)
      .subscribe((result:any)=>{
        if(result){
          console.log(result);
          localStorage.setItem("appid",JSON.stringify(result.appid))
          alert(result.message)
        }
      },(result)=>{
        console.log("test",result.error.message)     
        alert(result.error.message);})

    }
    else{
      alert("invalid type")
    }

  }



}
