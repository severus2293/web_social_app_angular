import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HttpService]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
