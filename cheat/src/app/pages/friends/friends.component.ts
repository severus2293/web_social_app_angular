import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass'],
  providers: [HttpService]
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
