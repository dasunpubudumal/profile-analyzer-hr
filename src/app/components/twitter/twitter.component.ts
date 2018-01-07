import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../../services/twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers: [TwitterService]
})
export class TwitterComponent implements OnInit {

  constructor(protected twitterService: TwitterService) { }

  ngOnInit() {}

  getAuth() {
    this.twitterService.auth();
  }

  getUser(screen_name: string) {
    this.twitterService.search(screen_name);
  }

}
