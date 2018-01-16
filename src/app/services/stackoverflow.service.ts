import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {StackOverflowUser} from '../models/stack-overflow-user';

@Injectable()
export class StackoverflowService {

  constructor(protected http: HttpClient) { }

  makeCall(userid: string) {
    const headers = new HttpHeaders();
    return this.http.get<StackOverflowUser>('http://localhost:3000/getstackofuser/' + userid, {headers: headers})
      .map(res => res);
  }

}
