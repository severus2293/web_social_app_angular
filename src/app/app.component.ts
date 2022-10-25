import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from "./http.service";
import {Router} from "@angular/router";
import {TransfereService} from "./pages/service/transfere/transfere.service";


export class User{
  id: number;
  img: string;
  name: string;
  birthday: string;
  mail: string;
  role: string;
  status: string;
  friends: any;
  messages: any;
  constructor(id: number,
              img: string,
              name: string,
              birthday: string,
              mail: string,
              role: string,
              status: string,
              friends: any,
              messages: any) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.birthday = birthday;
    this.mail = mail;
    this.role = role;
    this.status = status;
    this.friends = friends;
    this.messages = messages;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService],
  styleUrls: ["./css/app.component.sass"]
})
export class AppComponent implements OnInit{
  users: User[] = [];
  name: string;
  money: number;
  ID: number;


  constructor(private httpSer: HttpService) {}
  ngOnInit() {
    this.Init();
  }

  private Init() {
    this.httpSer.get_users().subscribe( (date: any) => {
      this.users = date;
      localStorage.setItem("data",JSON.stringify(date));
    });
  }

  onOutletLoaded(component) {
    component.users = this.users
  }
}
