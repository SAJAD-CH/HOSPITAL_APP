import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-availabledoctor',
  templateUrl: './availabledoctor.component.html',
  styleUrls: ['./availabledoctor.component.css']
})
export class AvailabledoctorComponent {

  doctorarray:any=[]
  bookappoinments:any          //ith any aaka
  drname:any
  spl:any

  appoinmentarray=this.fb.group({
    patientname:["",],
    patientage:["",],
    appoinmentdate:["",]

  })



  constructor(private http:HttpClient,private service:ServiceService,private fb:FormBuilder){

    // var appid = JSON.parse(localStorage.getItem("appid")||'')
    this.http.post('http://localhost:3000/availabledoctor',{
      // "appid":appid
    })
    .subscribe((result:any)=>{
      this.doctorarray=result.result

    })
    
  }


  bookappoinment(drid:any){
    console.log("clicked");
    console.log(drid);
    if(drid==1000){
      this.bookappoinments=1

      this.service.appoinmentpopup(drid)
      .subscribe((result:any)=>{
        if(result){
          // console.log(result);
          this.drname=result.name
          this.spl=result.spl
   
        }
      },)
    }else if(drid==1001){
      this.bookappoinments=2

      this.service.appoinmentpopup(drid)
      .subscribe((result:any)=>{
        if(result){
          // console.log(result);
          this.drname=result.name
          this.spl=result.spl
   
        }
      },)

    }
    else if(drid==1002){
      this.bookappoinments=3
      
      this.service.appoinmentpopup(drid)
      .subscribe((result:any)=>{
        if(result){
          // console.log(result);
          this.drname=result.name
          this.spl=result.spl
   
        }
      },)

    }else if(drid==1003){
      this.bookappoinments=4

      this.service.appoinmentpopup(drid)
      .subscribe((result:any)=>{
        if(result){
          // console.log(result);
          this.drname=result.name
          this.spl=result.spl
   
        }
      },)


    }else if(drid==1004){
      this.bookappoinments=5

      this.service.appoinmentpopup(drid)
      .subscribe((result:any)=>{
        if(result){
          // console.log(result);
          this.drname=result.name
          this.spl=result.spl
   
        }
      },)

    }
            //
   
  }

  patientappoinmentnuero(){
    var patientname=this.appoinmentarray.value.patientname
    var patientage=this.appoinmentarray.value.patientage
    var appoinmentdate=this.appoinmentarray.value.appoinmentdate

    if(this.appoinmentarray.valid){
      this.service.appoinmentnuero(this.drname,this.spl,patientname,patientage,appoinmentdate)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },(result)=>{                                                                                       //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
        alert(result.error.message)})
    }
    else{
      alert("not in valid format")
    }
  }

  patientappoinmentortho(){
    var patientname=this.appoinmentarray.value.patientname
    var patientage=this.appoinmentarray.value.patientage
    var appoinmentdate=this.appoinmentarray.value.appoinmentdate

    if(this.appoinmentarray.valid){
      this.service.appoinmentortho(this.drname,this.spl,patientname,patientage,appoinmentdate)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },(result)=>{                                                                                       //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
        alert(result.error.message)})
    }
    else{
      alert("not in valid format")
    }

  }

  patientappoinmentdento(){
    var patientname=this.appoinmentarray.value.patientname
    var patientage=this.appoinmentarray.value.patientage
    var appoinmentdate=this.appoinmentarray.value.appoinmentdate

    if(this.appoinmentarray.valid){
      this.service.appoinmentdento(this.drname,this.spl,patientname,patientage,appoinmentdate)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },(result)=>{                                                                                       //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
        alert(result.error.message)})
    }
    else{
      alert("not in valid format")
    }
  }

  
  patientappoinmentphysio(){
    var patientname=this.appoinmentarray.value.patientname
    var patientage=this.appoinmentarray.value.patientage
    var appoinmentdate=this.appoinmentarray.value.appoinmentdate

    if(this.appoinmentarray.valid){
      this.service.appoinmentphysio(this.drname,this.spl,patientname,patientage,appoinmentdate)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },(result)=>{                                                                                       //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
        alert(result.error.message)})
    }
    else{
      alert("not in valid format")
    }
  }

  
  patientappoinmentcardio(){
    var patientname=this.appoinmentarray.value.patientname
    var patientage=this.appoinmentarray.value.patientage
    var appoinmentdate=this.appoinmentarray.value.appoinmentdate

    if(this.appoinmentarray.valid){
      this.service.appoinmentcardio(this.drname,this.spl,patientname,patientage,appoinmentdate)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },(result)=>{                                                                                       //resultil statuscode ,status, message ithokke verum and ivde Ifil allathad konnd null value aayrkum verale so null valuente msg "already registered ayrkum" ath kittan vendiyanne error.msg kodkunand 
        alert(result.error.message)})
    }
    else{
      alert("not in valid format")
    }
  }




}
