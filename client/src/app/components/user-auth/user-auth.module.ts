import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	HttpModule,
    UserAuthRoutingModule
  ],
  declarations: [
  	LoginComponent 
  ]
})
export class UserAuthModule { }
