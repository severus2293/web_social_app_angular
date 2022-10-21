import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor(private httpSer: HttpService, private router: Router) { }
  user;
  users;

  newsstory;
  newsform = new FormGroup({
    text: new FormControl('', [Validators.required])
  });
  ngOnInit() {

    this.httpSer.get_users().subscribe( (date: any) => {
      this.users = date;
      localStorage.setItem('data', JSON.stringify(date));
    });
    // tslint:disable-next-line:radix
    const id = parseInt(this.router.url.replace('/user/', ''));
    for (const value of this.users) {
      if (value.id === id ) {
        this.user = value;
      }
    }
    this.httpSer.get_news(this.user.id).subscribe(r => {
      this.newsstory = r;
    });
    console.log(this.users);
    console.log(this.user);

  }

  publish_news() {

     this.httpSer.set_news(this.newsform.value.text, this.user.id).subscribe(r => {
       this.newsstory = r;
     });
     this.newsform.reset();
  }

  show_friends() {
    this.router.navigate(['/user/' + this.user.id + '/friends']);
  }

  show_news() {
    this.router.navigate(['/user/' + this.user.id + '/news']);
  }
}
