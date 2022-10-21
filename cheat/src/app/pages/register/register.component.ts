import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [HttpService],
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
