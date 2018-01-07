import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TwitterService {

  constructor(protected http: HttpClient) { }

  makeCall() {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    this.http.post('http://localhost:3000/authorize', null).subscribe((res) => {
      console.log(res);
    });

  }

}
