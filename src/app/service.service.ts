import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  register(firstname:any,lastname:any,age:any,mobnumber:any,email:any,password:any,address:any){
    const data={
      "firstname":firstname,
      "lastname":lastname,
      "age":age,
      "mobnumber":mobnumber,
      "email":email,
      "password":password,
      "address":address
    }

    return this.http.post('http://localhost:3000/register',data)

  }

  login(email:any,password:any){
    const data ={
      "email":email,
      "password":password
    }
    return this.http.post('http://localhost:3000/login',data)
  }

  loginadmin(adminid:any,password:any){
    const data={
      "adminid":adminid,
      "password":password
    }
    return this.http.post('http://localhost:3000/adminlogin',data)

  }

  doctoradd(drname:any,spl:any,exp:any,drid:any,appid:any){
    const data={
      "drname":drname,
      "spl":spl,
      "exp":exp,
      "drid":drid,
      "appid":appid
    }
    return this.http.post('http://localhost:3000/doctoradd',data)

  }

  surgeryadd(surname:any,drname:any,surfees:any,surduration:any,surid:any,appid:any){
    const data={
      "surname":surname,
      "drname":drname,
      "surfees":surfees,
      "surduration":surduration,
      "surid":surid,
      "appid":appid
    }

    return this.http.post('http://localhost:3000/surgeryadd',data)

    
  }

  appoinmentpopup(drid:any){
    return this.http.post('http://localhost:3000/appoinmentpopup ',({"drid":drid}))

  }

  appoinmentnuero(drname:any,spl:any,patientname:any,patientage:any,appoinmentdate:any){
    const data={
      "drname":drname,
      "spl":spl,
      "patientname":patientname,
      "patientage":patientage,
      "appoinmentdate":appoinmentdate
    }
    return this.http.post('http://localhost:3000/appoinmentnuero',data)
  }

  appoinmentortho(drname:any,spl:any,patientname:any,patientage:any,appoinmentdate:any){
    const data={
      "drname":drname,
      "spl":spl,
      "patientname":patientname,
      "patientage":patientage,
      "appoinmentdate":appoinmentdate
    }
    return this.http.post('http://localhost:3000/appoinmentortho',data)
  }

  appoinmentdento(drname:any,spl:any,patientname:any,patientage:any,appoinmentdate:any){
    const data={
      "drname":drname,
      "spl":spl,
      "patientname":patientname,
      "patientage":patientage,
      "appoinmentdate":appoinmentdate
    }
    return this.http.post('http://localhost:3000/appoinmentdento',data)
  }

  appoinmentphysio(drname:any,spl:any,patientname:any,patientage:any,appoinmentdate:any){
    const data={
      "drname":drname,
      "spl":spl,
      "patientname":patientname,
      "patientage":patientage,
      "appoinmentdate":appoinmentdate
    }
    return this.http.post('http://localhost:3000/appoinmentphysio',data)
  }

  appoinmentcardio(drname:any,spl:any,patientname:any,patientage:any,appoinmentdate:any){
    const data={
      "drname":drname,
      "spl":spl,
      "patientname":patientname,
      "patientage":patientage,
      "appoinmentdate":appoinmentdate
    }
    return this.http.post('http://localhost:3000/appoinmentcardio',data)
  }

  
  doctorlogin(drname:any,drid:any){
    const data={
      "drname":drname,
      "drid":drid
    }
    return this.http.post('http://localhost:3000/doctorlogin',data)


  }

  patientreportadd(patientname:any,reportid:any,testname:any,testresult:any,testid:any){
    const data={
      "patientname":patientname,
      "reportid":reportid,
      "testname":testname,
      "testresult":testresult,
      "testid":testid
    }
    return this.http.post('http://localhost:3000/patientreportadd',data)

  }

  reportidservice(reportid:any){
    const data={
      "reportid":reportid
    }
   return this.http.post('http://localhost:3000/reportid',data)

  }



}
