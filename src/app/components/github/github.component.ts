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

  constructor(protected githubService: GithubService,
              protected repositoryService: RepositoryService) {
    this.github_user = new User();
  }

  ngOnInit() {
      this.githubService.getUserBackend('dasunpubudumal').subscribe(user => {
        this.github_user = user.data;
        // console.log(this.github_user);  // Testing purposes
      });

      this.githubService.getRepoInfo('dasunpubudumal').subscribe(repo => {
        this.github_user.repository = repo.data;
        // console.log(this.github_user.repository); // Testing purposes
      });
    }
}
