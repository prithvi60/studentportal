import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string
  password!: string
  constructor(public ser:MainserviceService,private http:HttpClient,public router:Router) { }

  ngOnInit(): void {
  }
login(){
    let credentials = {
          email: this.email,
          password: this.password,
        }
        console.log(credentials)
        this.ser.LoginUser(this.email,this.password).subscribe({next:(res)=>{
          console.log(res)
          this.router.navigateByUrl('/user/show')

        },
        error: (err) => { alert("enter proper credentials") }
       })

}


}
