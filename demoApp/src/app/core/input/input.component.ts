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
    console.log(data,this.path2,data.path2)
    this.ser.PathFileXL(this.path2).subscribe({next:(data)=>{
      console.log(data)
      alert("ADDED TO DB!! press STUDENTS IN DATABASE link to see changes")
      this.router.navigateByUrl('/user/get')
     

    },
    error: (err) => { console.log(err) }
  })
}
  file(){
    let c={
      path1:this.path1
    }
    console.log(c.path1)
    this.ser.PathFile(c.path1).subscribe({next:(data)=>{
      console.log(data)
      alert("ADDED TO DB!! press STUDENTS IN DATABASE link to see changes")
      this.router.navigateByUrl('/user/get')

      
    },
    error: (err) => { console.log(err) }
  })
}

}
