import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable()
export class StackoverflowService {

  constructor(protected http: HttpClient) { }

  makeCall(userid: string) {
    const headers = new HttpHeaders();
    this.http.get('http://localhost:3000/getstackofuser/' + userid, {headers: headers})
      .subscribe((res) => {
        console.log(res);
      });
  }

}
