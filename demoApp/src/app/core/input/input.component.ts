import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
public path1!:string
public path2!:string

  constructor(public ser:MainserviceService,public router:Router) { }

  ngOnInit(): void {
  }
  file1(){
    let data={
      path2:this.path2
      
    }
    this.ser.PathFileXL(this.path2).subscribe(data=>{
      console.log(data)
      alert("ADDED TO DB!! press STUDENTS IN DATABASE link to see changes")
      this.router.navigateByUrl('/user/get')
     

    })
  }
  file(){
    let data={
      path1:this.path1
    }
    this.ser.PathFile(this.path1).subscribe(data=>{
      console.log(data)
      alert("ADDED TO DB!! press STUDENTS IN DATABASE link to see changes")
      this.router.navigateByUrl('/user/get')

      
    })
  }

}
