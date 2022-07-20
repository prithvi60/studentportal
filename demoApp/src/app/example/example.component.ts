import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(public ser:MainserviceService) { }
public sid:any
  ngOnInit(): void {
    this.ser.getUpdate(this.ser.studId).subscribe((data)=>{
      this.sid=data.SID
    })
  }

}
