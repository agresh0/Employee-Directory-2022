import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  employeeDetails:any = []

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getList().subscribe((data)=>{
      this.employeeDetails = data['users']
      console.log(this.employeeDetails);
       
    })
  }

}
