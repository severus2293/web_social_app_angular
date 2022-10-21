import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class TransfereService {

  constructor(
    private router:Router
  ) { }

  private data;

  setData(data){
  }

  getData(){
  }

  clearData(){
    this.data = undefined;
  }

}
