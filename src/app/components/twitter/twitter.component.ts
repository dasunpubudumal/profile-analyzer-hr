import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../../services/twitter.service';
import { TwitterUser } from '../../models/twitter-user';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers: [TwitterService]
})
export class TwitterComponent implements OnInit {

  protected twitterUserView: TwitterUser;

  constructor(protected twitterService: TwitterService) {

  }

  ngOnInit() {}

  getAuth() {
    this.twitterService.auth();
  }

  // A timeout was added to prevent async behaviour.
  getUser(screen_name: string) {
    this.twitterService.search(screen_name);
    setTimeout(() => {
      this.twitterUserView = this.twitterService.twitterUser;
      console.log(this.twitterUserView);
    }, 1000);

  }

}
