import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-patientregister',
  templateUrl: './patientregister.component.html',
  styleUrls: ['./patientregister.component.css']
})
export class PatientregisterComponent {

  registerform=this.fb.group({
    firstname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    lastname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    age:["",[Validators.required,Validators.pattern('[0-9]*')]],
    mobnumber:["",[Validators.required,Validators.pattern('[0-9]*')]],
    email:["",],
    password:["",],
    address:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]]

  })

  

  constructor(private fb : FormBuilder,private service:ServiceService,private route:Router){}


  register(){

    var firstname=this.registerform.value.firstname
    var lastname=this.registerform.value.lastname
    var age=this.registerform.value.age
    var mobnumber=this.registerform.value.mobnumber
    var email=this.registerform.value.email
    var password = this.registerform.value.password
    var address=this.registerform.value.address

    if(this.registerform.valid){
      this.service.register(firstname,lastname,age,mobnumber,email,password,address)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.route.navigateByUrl("patientlogin")
          
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
