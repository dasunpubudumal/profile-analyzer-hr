import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TwitterService {

  userdata;

  constructor(protected http: HttpClient) { }

  auth() {
    const headers = new HttpHeaders();
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    });
  }

  search(screen_name: string) {
    const headers = new HttpHeaders();
    this.http.post('http://localhost:3000/gettwitteruser/' + screen_name, {headers: headers})
      .subscribe((res) => {
      console.log(res);
    });
  }

}
