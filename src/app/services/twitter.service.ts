import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TwitterService {

  constructor(protected http: HttpClient) { }

  makeCall() {
    const headers = new HttpHeaders();
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    });

  }

}
