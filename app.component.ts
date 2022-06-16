import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularproject';
  emps:any[] = [];


  empid = '101';
  empname = 'Lekhana';
  salary = 50000;


  updatevalues(){
    this.salary += 4000;
  }

  /*emps=[
    {"empid":"101" , "empname":"lekhana" , "salary":30000},
    {"empid":"102" , "empname":"lekhana1" , "salary":50000}
  ]*/
  constructor(public myservice:MyserviceService){}

  formSubmit(myForm:any){
    this.emps = this.myservice.addEmps(myForm.value)
  }
  fetchEmps(){
      this.emps = this.myservice.getEmps()
  }
  deleteEmps(id:String){
    this.emps = this.myservice.deleteEmps(id)
  }

}