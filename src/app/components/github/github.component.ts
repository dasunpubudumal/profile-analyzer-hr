import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/GithubUser';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]

})
export class GithubComponent implements OnInit {

  protected github_user: User;

  constructor(protected githubService: GithubService) {
    this.github_user = new User();
  }

  ngOnInit() {
      this.githubService.getUserBackend('dasunpubudumal').subscribe(user => {
        this.github_user = user.data;
        console.log(this.github_user);  // Testing purposes
      });
    }
}
