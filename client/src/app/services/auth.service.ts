import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  storageKey: string = 'contact-manager-jwt';

  constructor(
    public jwtHelper: JwtHelper,
    private router: Router
  ) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  logOut() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }
}
