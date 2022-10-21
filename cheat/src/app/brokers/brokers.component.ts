import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

/*class Broker {
  name: string;
  money: number;
  ID: number;
  constructor(name: string, money: number, ID: number) {
    this.name = name;
    this.money = money;
    this.ID = ID;
  }
}*/
class User{
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
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  providers: [HttpService]
})

export class BrokersComponent implements OnInit {
  brokers: User[] = [];
  name: string;
  money: number;
  ID: number;


  constructor(private httpSer: HttpService) {}
  ngOnInit() {
    this.Init();
  }

  private Init() {
    this.httpSer.get_users().subscribe( (date: any) => {
      this.brokers = date;
      console.log(date);
    });
  }

  /*delete(ID: number) {
    const index = this.brokers.findIndex(function (broker: Broker ) {
      return broker.ID == ID;
    });
    this.brokers.splice(index, 1);
    this.httpSer.set_brokers(this.brokers).subscribe();
  }
*/
  edit() {
    this.httpSer.set_brokers(this.brokers).subscribe();
  }

  /*add() {
    this.ID = this.brokers[this.brokers.length - 1].ID + 1;
    this.brokers.push(new Broker(this.name, this.money, this.ID));
    this.httpSer.set_brokers(this.brokers).subscribe();
  }
*/
}

