import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/GithubUser';
import {Repository} from '../../models/repository';
import {RepositoryService} from '../../services/repository.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService, RepositoryService]

})
export class GithubComponent implements OnInit {

  protected github_user: User;

  // And this should be used for the parameter of each method.
  // This should be used as the ngModel which binds the input.
  protected username: string;


  constructor(protected githubService: GithubService,
              protected repositoryService: RepositoryService) {
    this.github_user = new User();
  }

  ngOnInit() {

      /*
        All code here is for testing.
       */

      this.githubService.getUserBackend('dasunpubudumal').subscribe(user => {
        this.github_user = user;
        // console.log(this.github_user);  // Testing purposes
      });

      this.githubService.getRepoInfo('dasunpubudumal').subscribe(repo => {
        this.github_user.repositories = repo;
        // console.log(this.github_user.repositories); // Testing purposes
      });

    }

    getUser(username: string) {

      // Basic user info
      this.githubService.getUserBackend(this.username).subscribe(user => {
        this.github_user = user;
      });

      // Repo info

      this.githubService.getRepoInfo(this.username).subscribe(repo => {
        this.github_user.repositories = repo;
      });
    }

}
