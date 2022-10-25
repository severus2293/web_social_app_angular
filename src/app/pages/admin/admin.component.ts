import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [HttpService]
})
export class AdminComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('curuser'));
  users = JSON.parse(localStorage.getItem('data'));
  constructor(private httpSer: HttpService, private router: Router) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('curuser'));
    this.users = JSON.parse(localStorage.getItem('data'));
    /*this.httpSer.get_users().subscribe( (date: any) => {
      this.users = date;
    });*/
    // tslint:disable-next-line:radix
   /* const id = parseInt(this.router.url.replace('/user/', ''));
    for (const value of this.users) {
      if (value.id === id ) {
        this.user = value;
      }
    }*/
  }



  chng_date(event) {
    const id = event.target.id.replace('date:', '');
    const text = event.target.value;
    // tslint:disable-next-line:radix
    if (this.user.id === parseInt(id)) {
      this.user.birthday = text;
      this.users[id] = this.user;
      localStorage.setItem('curuser', JSON.stringify(this.user));
      localStorage.setItem('data', JSON.stringify(this.users));
    } else {
      this.users[id].birthday = text;
      localStorage.setItem('data', JSON.stringify(this.users));
    }
    this.httpSer.set_date(text, id).subscribe( (date: any) => {
    });
  }

  chng_mail(event) {
    const id = event.target.id.replace('mail:', '');
    const text = event.target.value;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(text) === true) {
      // tslint:disable-next-line:radix
      if (this.user.id === parseInt(id)) {
        this.user.mail = text;
        this.users[id] = this.user;
        localStorage.setItem('curuser', JSON.stringify(this.user));
        localStorage.setItem('data', JSON.stringify(this.users));
      } else {
        this.users[id].mail = text;
        localStorage.setItem('data', JSON.stringify(this.users));
      }

      this.httpSer.set_mail(text, id).subscribe( (date: any) => {
      });
    }
  }

  chng_role(event) {
    const id = event.target.id.replace('role:', '');
    const text = event.target.value;
    // tslint:disable-next-line:radix
    /*if (this.user.id === parseInt(id)) {
      this.user.id.role = text;
      this.users[id] = this.user;
      localStorage.setItem('curuser', JSON.stringify(this.user));
      localStorage.setItem('data', JSON.stringify(this.users));
    } else {

    }*/
    // tslint:disable-next-line:radix
    if (this.user.id === parseInt(id)) {
      this.user.role = text;
      this.users[id] = this.user;
      localStorage.setItem('curuser', JSON.stringify(this.user));
      localStorage.setItem('data', JSON.stringify(this.users));
    } else {
      this.users[id].role = text;
      localStorage.setItem('data', JSON.stringify(this.users));
    }
    this.httpSer.set_role(text, id).subscribe( (date: any) => {
    });
  }

  chng_status(event) {
    const id = event.target.id.replace('status:', '');
    const text = event.target.value;
    // tslint:disable-next-line:radix
    if (this.user.id === parseInt(id)) {
      this.user.status = text;
      this.users[id] = this.user;
      localStorage.setItem('curuser', JSON.stringify(this.user));
      localStorage.setItem('data', JSON.stringify(this.users));
    } else {
      this.users[id].status = text;
      localStorage.setItem('data', JSON.stringify(this.users));
    }
    this.httpSer.set_status(text, id).subscribe( (date: any) => {
    });
  }
}
