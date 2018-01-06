import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]

})
export class GithubComponent implements OnInit {

  constructor(protected githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUser('dasunpubudumal')
      .subscribe(user => {console.log(user); });
  }


}
