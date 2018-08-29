import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from './auth.service';

@Injectable()
export class ApiService {

  private baseUrl = "http://localhost:5000";

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  get (url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post (url: string, body) {
    return this.request(url, RequestMethod.Post, body);
  }

  put (url: string, body) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete (url: string) {
    return this.request(url, RequestMethod.Delete);
  }


  request(url: string, method: RequestMethod, body?: Object) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authService.getToken()}`);

    const requestOptions = new RequestOptions({
      url: `${this.baseUrl}/${url}`,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this.http.request(request)
    .map( (res: Response) => res.json() )
    .catch( (res: Response) => this.onRequestError(res) );
  }

  onRequestError (res: Response) {
    const statusCode = res.status;
    const body = res.json();

    const error = {
      statusCode: statusCode,
      error: body.error
    };

    console.log(error);

    return Observable.throw(error);
  }

}
