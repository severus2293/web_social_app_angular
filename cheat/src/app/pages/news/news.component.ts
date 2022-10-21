import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
  providers: [HttpService]
})
export class NewsComponent implements OnInit {

  constructor(private httpSer: HttpService, private router: Router) { }
  friends = [];
  users = [];
  user;
  ngOnInit() {
    this.httpSer.get_users().subscribe( (date: any) => {
      this.users = date;
    });
    console.log(this.users);
    // tslint:disable-next-line:radix
    const id = parseInt(this.router.url.replace('/user/', ''));
    for (const value of this.users) {
      if (value.id === id ) {
        this.user = value;
      }
    }
    this.friends = this.user.friends;
    console.log(this.user);
  }
}


