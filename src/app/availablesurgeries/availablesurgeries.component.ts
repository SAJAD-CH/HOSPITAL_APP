import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-availablesurgeries',
  templateUrl: './availablesurgeries.component.html',
  styleUrls: ['./availablesurgeries.component.css']
})
export class AvailablesurgeriesComponent {
  surgeryarray:any=[]

  constructor(private http:HttpClient){
    this.http.post('http://localhost:3000/availablesurgery',{

    })
    .subscribe((result:any)=>{
      this.surgeryarray=result.result

    })
  }

}
