import { Component } from '@angular/core';
import { UsersdataService } from 'src/services/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Myproject';
  userData:any=[{}];
    constructor(private userdataService:UsersdataService){
     this.userdataService.users().subscribe(data=>{
     this.userData=data;
    })
  }
  
}
