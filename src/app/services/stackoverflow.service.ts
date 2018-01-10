import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable()
export class StackoverflowService {

  constructor(protected http: HttpClient) { }

  makeCall() {
    const headers = new HttpHeaders();
    this.http.post('http://localhost:3000/getstackofuser', {headers: headers})
      .subscribe((res) => {
        console.log(res);
      });
  }

}
