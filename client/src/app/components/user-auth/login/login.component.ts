import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  	private apiService: ApiService,
  	private authService: AuthService,
  	private router: Router
  ) { }

  ngOnInit() {
  	if (this.authService.isLoggedIn()) {
  		this.router.navigate(['/dashboard']);
  	}
  }

  onSubmit(loginForm: NgForm) {
  	const values = loginForm.value;
  	console.log(loginForm);
    this.apiService.post("user/login", values)
      .subscribe(data => {
        this.authService.setToken(data.token);
        this.router.navigate(['dashboard']);
      }, error => {
        console.log(error);
      });
  }



}
