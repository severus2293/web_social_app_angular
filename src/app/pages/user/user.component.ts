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

  constructor(private httpSer: HttpService, private router: Router) {router.events.subscribe((val) => {
    this.ngOnInit();
  }); }
  user = JSON.parse(localStorage.getItem('curuser'));
  users = JSON.parse(localStorage.getItem('data'));
  newsstory;
  newsform = new FormGroup({
    text: new FormControl('', [Validators.required])
  });
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('curuser'));
    this.users = JSON.parse(localStorage.getItem('data'));
      /*this.httpSer.get_users().subscribe((date: any) => {
        this.users = date;
      });
      const id = parseInt(this.router.url.replace('/user/', ''));
      for (const value of this.users) {
          if (value.id === id) {
            this.user = value;
          }
        }
      */
      this.httpSer.get_news(this.user.id).subscribe(r => {
          this.newsstory = r;
      });
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
  new_image(event) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      // tslint:disable-next-line:only-arrow-functions
      this.user.img = 'assets/userpics/' + event.target.files[0].name;
      localStorage.setItem('curuser', JSON.stringify(this.user));
      this.httpSer.set_image(this.user.img, this.user.id).subscribe(r => {
      });
    }
  }

  show_admin() {
    this.router.navigate(['/user/' + this.user.id + '/admin']);
  }
}
