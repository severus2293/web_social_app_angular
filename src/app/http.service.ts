import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get_users() {
    return this.http.get('http://localhost:3000/appusers');
  }
  set_news(date: string, userid: string) {
    const body = { text: date};
    return this.http.post('http://localhost:3000/user/' + userid + '/appaddnews', body);
  }
  get_news(userid: string) {
    return this.http.get('http://localhost:3000/user/' + userid + '/appnews');
  }

  set_image(img, id) {
    const body = { image: img};
    return this.http.post('http://localhost:3000/user/' + id + '/chngimg', body);
  }
  set_date(dat, id) {
    const body = {
      user: id,
      text: dat
    };
    return this.http.post('http://localhost:3000/editdate', body);
  }
  set_user(date: any) {
    return this.http.post('http://localhost:3000/adduser', date);
  }

  set_mail(mail, id) {
    const body = {
      user: id,
      text: mail
    };
    return this.http.post('http://localhost:3000/editmail', body);
  }

  set_role(role, id) {
    const body = {
      user: id,
      text: role
    };
    return this.http.post('http://localhost:3000/editrole', body);
  }

  set_status(stat, id) {
    const body = {
      user: id,
      text: stat
    };
    return this.http.post('http://localhost:3000/editstat', body);
  }

  set_friends(friendsarr, id) {
    const body = {
      friends: friendsarr,
      user: id
    };
    return this.http.post('http://localhost:3000/editfriends', body);
  }
}
