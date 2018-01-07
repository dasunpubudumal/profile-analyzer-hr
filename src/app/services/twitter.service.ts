import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TwitterUser} from '../models/twitter-user';

@Injectable()
export class TwitterService {

  public userdata: any;
  public twitterUser: TwitterUser;

  constructor(protected http: HttpClient) {
    this.twitterUser = new TwitterUser();
  }

  auth() {
    const headers = new HttpHeaders();
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    });
  }

  search(screen_name: string) {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/gettwitteruser/' + screen_name, {headers: headers})
      .subscribe((res) => {
      // this.userdata = <any>res;
        this.userdata = res;
        this.twitterUser = this.userdata.data;
        // console.log(this.userdata.data);
      // this.twitterUser = JSON.parse(this.userdata.data.data);
      // console.log(this.userdata.data);
    });
  }



}
