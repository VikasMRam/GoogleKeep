import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { loginRoutingModule } from './login-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from "@angular/forms"

@NgModule({
  imports: [
    CommonModule,
    loginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegistrationComponent]
})
export class LoginModule { }
