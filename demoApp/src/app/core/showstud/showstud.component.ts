import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-showstud',
  templateUrl: './showstud.component.html',
  styleUrls: ['./showstud.component.css']
})
export class ShowstudComponent implements OnInit {

  constructor(public ser:MainserviceService,public router:Router) { }
  show:any
  studId!:string
  checkout:any
  public hours:any
  public min:any
  public roundoff:any
  public fine:any
  
    ngOnInit(): void {
      this.ser.getStud().subscribe((data)=>{
        console.log(data)
        this.show=data
      })
    }
    out(){
      this.ser.getCheckout(this.studId).subscribe((data)=>{
        console.log(data)
        
        this.ser.studId=this.studId
        this.checkout=new Date(new Date().getTime()+(5*60+30)*60000)
        const total = new Date(this.checkout).getTime() - new Date(data.checkin).getTime();
          console.log(this.checkout,data.checkin)
          
             this.hours = (Math.floor((total) / 1000)) / 3600;
      console.log(this.hours)
          this.min = this.hours * 60
          this.roundoff=Math.ceil(this.min/5)*5;
          this.fine=(this.roundoff/5)*10
          this.ser.fine=this.fine
          this.ser.min=this.min
        this.ser.getCheckoutp(this.ser.studId,this.checkout,this.min,this.fine).subscribe((data)=>{
          console.log(data)
          
        })
        this.router.navigateByUrl('/user/out')
      })
    }
  
  
}
