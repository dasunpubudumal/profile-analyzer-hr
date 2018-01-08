import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import {User} from '../../models/GithubUser';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]

})
export class GithubComponent implements OnInit {

  private github_user: User;

  constructor(protected githubService: GithubService) {
    this.github_user = new User();
  }

  ngOnInit() {
      // this.githubService.getUser('dasunpubudumal')
      //   .subscribe(user => {
      //     this.github_user = user;
      //   });

      this.githubService.getUserBackend('dasunpubudumal').subscribe(user => {
        // this.github_user = user
        console.log(user);
        // Have to parse data and assign it to the user.
      });
    }
}
