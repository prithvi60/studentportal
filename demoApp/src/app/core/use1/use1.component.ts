import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-use1',
  templateUrl: './use1.component.html',
  styleUrls: ['./use1.component.css']
})
export class Use1Component implements OnInit {
  constructor(public ser:MainserviceService,public router:Router) { }
  public studshow:any
  public fine:any
  public min:any
    ngOnInit(): void {
      this.ser.getOneStud(this.ser.studId).subscribe((data)=>{
        this.fine=this.ser.fine
        this.min=this.ser.min
    console.log(this.fine,this.min)
    console.log("here is the data")
      })
      
     
     
    }
    detectchanges(){
      
      this.ser.getOneStudMain(this.ser.studId).subscribe((data)=>{
        console.log("upated is")
      
        console.log(data)
      })
    }
    out1(){
      this.ser.getUpdate(this.ser.studId).subscribe((data)=>{
       
      })
      this.router.navigateByUrl('/out')
      
    }
  

}
