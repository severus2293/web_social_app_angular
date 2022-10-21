import { Input,Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../http.service";
import {User} from "../../app.component"
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
  providers: [HttpService]
})
export class TitleComponent implements OnInit {
  users: User[]
  // @ts-ignore
  form = new FormGroup({
    name: new FormControl('',[Validators.required])
  })
  constructor(private httpSer: HttpService,private router: Router) {

  }
  ngOnInit() {

  }


  checkname() {
    for (let value of JSON.parse(localStorage.getItem("data"))) {
      if (value.name === this.form.value.name) {
        return false;
      }
    }
    return true;
  }

  submit() {
    for (let value of JSON.parse(localStorage.getItem("data"))) {
      if (value.name === this.form.value.name) {
        this.router.navigate(['/user/' + value.id]);
        return true;
      }
    }
    return false;
  }
}
