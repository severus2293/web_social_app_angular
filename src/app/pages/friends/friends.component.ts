import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass'],
  providers: [HttpService]
})
export class FriendsComponent implements OnInit {

  constructor(private httpSer: HttpService, private router: Router, private fb: FormBuilder) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }

  user = JSON.parse(localStorage.getItem('curuser'));
  users = JSON.parse(localStorage.getItem('data'));
  flag: boolean;
  friendsform: FormGroup;
  onChange(name: number, isChecked: boolean) {
    const friends = (this.friendsform.controls.name as FormArray);

    if (isChecked) {
      friends.push(new FormControl(JSON.stringify(name)));
    } else {
      const index = friends.controls.findIndex(x => x.value === JSON.stringify(name));
      friends.removeAt(index);
    }
  }
  ngOnInit() {
    this.flag = false;
    this.user = JSON.parse(localStorage.getItem('curuser'));
    this.users = JSON.parse(localStorage.getItem('data'));
    /*
    this.httpSer.get_users().subscribe((date: any) => {
      this.users = date;
    });*/
    this.friendsform = this.fb.group({
      name: this.fb.array([])
    });
    /*
    const id = parseInt(this.router.url.replace('/user/', ''));
    for (const value of this.users) {
      if (value.id === id) {
        this.user = value;
      }
    }*/
  }

  shure() {
    return confirm('вы точно хотите удалить друга?');
  }

  del_friend(event) {
    const index = this.user.friends.indexOf(event.target.id);
    if (index >= 0) {
      this.user.friends.splice(index, 1);
    }
    localStorage.setItem('curuser', JSON.stringify(this.user));
    this.httpSer.set_friends(this.user.friends, this.user.id).subscribe((date: any) => {
    });
  }

  show_dialog() {
    this.flag = !this.flag;
  }

  get_not_friends() {
    // tslint:disable-next-line:variable-name
    const not_friend = [];
    for (const value of this.users) {
      if (this.user.friends.indexOf(JSON.stringify(value.id)) === -1 && value.id !== this.user.id) {
        not_friend.push(value.id);
      }
    }
  //  for (const value of not_friend) {
   //   (this.friendsform.controls.friens as FormArray).push(new FormControl('', Validators.required));
  //  }
    return not_friend;
  }

  add_friends() {
    this.show_dialog();
    console.log(this.friendsform.value.name);
    for (const value of this.friendsform.value.name) {
      this.user.friends.push(value);
    }
    localStorage.setItem('curuser', JSON.stringify(this.user));
    this.friendsform.reset();
    this.friendsform = this.fb.group({
      name: this.fb.array([])
    });
    console.log(this.friendsform.value.name);
    this.httpSer.set_friends(this.user.friends, this.user.id).subscribe((date: any) => {
    });
  }
}
