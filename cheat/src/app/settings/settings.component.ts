import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

class Setting {
  tm_begin: string;
  tmstop: string;
  tmout: string;
  constructor(tm_begin: string, tmstop: string, tmout: string) {
    this.tm_begin = tm_begin;
    this.tmstop = tmstop;
    this.tmout = tmout;
  }
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  providers: [HttpService]
})
export class SettingsComponent implements OnInit {

  settings: Setting;

  constructor(private httpService: HttpService){}
  ngOnInit() {
    this.Init();
  }

  edit() {
    this.httpService.set_setting(this.settings).subscribe();
  }


  Init() {
    this.httpService.get_settings().subscribe((data: any) => {
      this.settings = data;
      console.log(this.settings);
    });
  }
}
