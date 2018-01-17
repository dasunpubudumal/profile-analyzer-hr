import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/GithubUser';
import 'rxjs/add/operator/map';
import {Repository} from '../models/repository';

@Injectable()
export class GithubService {

  public user: User;

  constructor(protected http: HttpClient) {
    this.user = new User();
  }

  getUserBackend(username: string) {
    return this.http.get<User>('http://localhost:3000/getgithubuser/'.concat(username))
      .map(res => res.data);
  }

  getRepoInfo(username: string) {
    return this.http.get<Repository>('http://localhost:3000/getrepo/'.concat(username))
      .map(res => res.data);
  }

}
