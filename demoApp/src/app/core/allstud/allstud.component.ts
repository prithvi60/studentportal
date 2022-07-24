import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-allstud',
  templateUrl: './allstud.component.html',
  styleUrls: ['./allstud.component.css']
})
export class AllstudComponent implements OnInit {

  constructor(public ser:MainserviceService) { }
public stud:any
  ngOnInit(): void {
    this.ser.getStudAll().subscribe(data=>{
this.stud=data;
console.log(data)
    })
  }

}
