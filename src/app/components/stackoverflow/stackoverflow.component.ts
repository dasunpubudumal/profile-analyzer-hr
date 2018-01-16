import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../services/stackoverflow.service';
import {StackOverflowUser} from '../../models/stack-overflow-user';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.css'],
  providers: [StackoverflowService]
})
export class StackoverflowComponent implements OnInit {

  protected stackOverflowUser: StackOverflowUser;

  constructor(protected stackOverflowService: StackoverflowService) {
    this.stackOverflowUser = new StackOverflowUser();
  }

  ngOnInit() {
    this.stackOverflowService.makeCall('7870026').subscribe(user => {
      this.stackOverflowUser = user.data.items[0];
      // console.log(this.stackOverflowUser.account_id);
    });
  }

}
