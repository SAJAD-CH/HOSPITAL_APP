import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  loginform=this.fb.group({
    adminid:["",[Validators.required,Validators.pattern('[0-9]*')]],
    password:["",]
      
  })

  constructor(private fb:FormBuilder,private service:ServiceService,private route:Router){}
  
  login(){
    var adminid=this.loginform.value.adminid
    var password=this.loginform.value.password

    if(this.loginform.valid){
      this.service.loginadmin(adminid,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.route.navigateByUrl("admindashboard")

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
