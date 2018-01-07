import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/GithubUser';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = 'dasunpubudumal';
  private client_id = '2c77c5a8d6e0519eb3a5';
  private client_secret = '04ba9edca249e4adf378919a5a1d7e36fad00e96';
  private readonly URL = 'https://api.github.com/users/';

  public user: User;

  constructor(protected http: HttpClient) {
    console.log('Github Service Initialize');
    this.user = new User();
  }

  // Test Method using void
  getUserTest(username: string): void {
    this.http.get('https://api.github.com/users/'.concat(username))
      .subscribe(data => { console.log(data); });

  }
  // Development method for getting a user
  getUser(username: string) {
    // RegEx used for String Manipulation
    return this.http.get<User>('https://api.github.com/users/'.concat(username))
      .map(res => res);
  }


}
