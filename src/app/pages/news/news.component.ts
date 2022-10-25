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

  constructor(private httpSer: HttpService, private router: Router) { router.events.subscribe((val) => {
    this.ngOnInit();
  });
  }
  user = JSON.parse(localStorage.getItem('curuser'));
  users = JSON.parse(localStorage.getItem('data'));
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('curuser'));
    this.users = JSON.parse(localStorage.getItem('data'));
    /*
    this.httpSer.get_users().subscribe( (date: any) => {
      this.users = date;
    });
    // tslint:disable-next-line:radix
    const id = parseInt(this.router.url.replace('/user/', ''));
    for (const value of this.users) {
        if (value.id === id) {
          this.user = value;
        }
      }
   */
  }
}


