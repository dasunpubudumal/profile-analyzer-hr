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

  public github_user: User;

  constructor(protected githubService: GithubService) {
    this.github_user = new User();
  }

  ngOnInit() {
    this.githubService.getUser('dasunpubudumal')
      .subscribe(user => {
        console.log(user.created_at);
        this.github_user.avatar_url = user.avatar_url;
        this.github_user.login = user.login;
        this.github_user.html_url = user.html_url;
        this.github_user.name = user.name;
        this.github_user.company = user.company;
        this.github_user.blog = user.blog;
        this.github_user.location = user.location;
        this.github_user.email = user.email;
        this.github_user.bio = user.bio;
        this.github_user.public_repos = user.public_repos;
        this.github_user.public_gists = user.public_gists;
        this.github_user.followers = user.followers;
        this.github_user.following = user.following;
        this.github_user.created_at = user.created_at;
      });
  }


}
