import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
  	private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  loginSubmit(loginForm: NgForm) {
  	const formValue = loginForm.value;
  	console.log(formValue);
  	this.apiService.post("product", formValue)
  		.subscribe(data => {
  			console.log(data);
  		}, error => {
  			console.log(error);
  		})

  }

}
