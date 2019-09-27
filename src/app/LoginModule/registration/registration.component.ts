import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }


  private username: string = "";
  private password: string = "";
  private confirmPassword: string = "";
  private message: string;


  onSignUp() {
    console.log("aaaaaaa")
    if (this.password == this.confirmPassword){
      console.log("aaaasss")
     let msg =  this.loginService.Register(this.username, this.password);
     if(msg=="registered")
     {
       this.router.navigateByUrl('login')
     }
     else
     {
       this.message = " Something went wrong try again!" 
     }
    }
    else
      this.message = "Passwords are not matching"
  }

}
