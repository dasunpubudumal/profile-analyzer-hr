import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../services/stackoverflow.service';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.css'],
  providers: [StackoverflowService]
})
export class StackoverflowComponent implements OnInit {

  constructor(protected stackOverflowService: StackoverflowService) { }

  ngOnInit() {
    this.stackOverflowService.makeCall();
  }

}
