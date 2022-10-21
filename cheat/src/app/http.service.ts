import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get_users() {
    return this.http.get('http://localhost:3000/appusers');
  }
  set_news(date: string,userid: string){
    const body = { text: date}
    return this.http.post('http://localhost:3000/user/'+ userid +'/appaddnews', body);
  }
  get_news(userid: string){
    return this.http.get('http://localhost:3000/user/'+ userid +'/appnews');
  }
  get_stoks() {
    return this.http.get('http://localhost:4201/stoks');
  }

  get_settings() {
    return this.http.get('http://localhost:4201/setting');
  }

  set_brokers(date: any) {
    const body = date;
    console.log(body);
    return this.http.post('http://localhost:4201/brokers', body);
  }

  set_stoks(date: any) {
    const body = date;
    console.log(body);
    return this.http.post('http://localhost:4201/stoks', body);
  }

  set_setting(date: any) {
    const body = date;
    console.log(body);
    return this.http.post('http://localhost:4201/setting', body);
  }

}
