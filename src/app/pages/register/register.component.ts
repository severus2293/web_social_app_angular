import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [HttpService],
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private httpSer: HttpService, private router: Router) {router.events.subscribe((val) => {
    this.ngOnInit();
  });
  }
  registform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required])
  });
  users = JSON.parse(localStorage.getItem('data'));
  ngOnInit() {
    this.httpSer.get_users().subscribe( (date: any) => {
      this.users = date;
    });
  }

  checkname() {
    for (const value of this.users) {
      if (value.name === this.registform.value.name) {
        return true;
      }
    }
    return false;
  }

  checkdate() {
    return this.registform.value.date === '';

  }

  checkmail() {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(this.registform.value.mail);
  }

  checkphoto() {
    return this.registform.value.photo === '';
  }

  checkcorrectdata() {
    // tslint:disable-next-line:max-line-length
    if (!this.checkname() && !this.checkdate() && !this.checkmail() && !this.checkphoto() && this.registform.value.name.trim().length !== 0) {
      const body = { id: this.users.length,
        img: 'assets/userpics/' + this.registform.value.photo.replace('C:\\fakepath\\', ''),
        name: this.registform.value.name,
        birthday: this.registform.value.date,
        mail: this.registform.value.mail,
        role: 'user',
        status: 'active',
        friends: [],
        messages: []
      };
      this.httpSer.set_user(body).subscribe(r => {
      });
      this.users.push(body);
      localStorage.setItem('data', JSON.stringify(this.users));
      localStorage.setItem('curuser', JSON.stringify(body));
      this.router.navigate(['/user/' + this.users.length]);
      return true;
    }
    return false;
  }
}
