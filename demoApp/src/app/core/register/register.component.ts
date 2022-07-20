import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string
  password!: string
  constructor(public ser:MainserviceService,private http:HttpClient,public router:Router) { }

  ngOnInit(): void {

  }
    register(){
      let credentials = {
            email: this.email,
            password: this.password,
          }
          console.log(credentials)
          this.ser.RegUser(this.email,this.password).subscribe({next:(res)=>{
            console.log(res)
            this.router.navigateByUrl('/user/login')

          },
          error: (err) => { alert("already existing") }
         })
  
}
}
