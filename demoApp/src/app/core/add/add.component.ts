import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public SID:any
  constructor(public ser:MainserviceService) { }

  ngOnInit(): void {
  }
  AddStud(){
    let c={
      SID:this.SID
    }
    this.ser.postStud(this.SID).subscribe((data)=>{

    })
  }

}
