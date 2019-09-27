import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private loginService:LoginService, private router:Router) { }

  private username:string="";
  private password:string="";
  private message: string;

  ngOnInit() {
  }

  authenticate()
  {
    let msg = this.loginService.authenticate(this.username,this.password);
    if(msg=="authenticated")
    {
      this.router.navigateByUrl("dashboard")
    }
    else
    {
      this.message = msg;
    }
  }

}
