import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

class Stok {
  distribution: string;
  max: number;
  price: number;
  count: number;
  id: number;
  constructor(distribution: string, max: number, price: number, count: number, id: number) {
    this.distribution = distribution;
    this.max = max;
    this.price = price;
    this.count = count;
    this.id = id;
  }
}

@Component({
  selector: 'app-stoks',
  templateUrl: './stoks.component.html',
  providers: [HttpService]
})
export class StoksComponent implements OnInit {

  stocks: Stok[];
  distribution: string;
  max: number;
  price: number;
  count: number;
  id: number;

  constructor(private httpService: HttpService){}
  ngOnInit() {
    this.Init();
  }

  delete(id: number) {
    const index = this.stocks.findIndex(function (stocks) {
      return stocks.id == id;
    });
    this.stocks.splice(index, 1);
    this.httpService.set_stoks(this.stocks).subscribe();
  }

  edit() {
    this.httpService.set_stoks(this.stocks).subscribe();
  }

  add() {
    this.id = this.stocks[this.stocks.length - 1].id + 1;
    this.stocks.push(new Stok(this.distribution, this.max, this.price, this.count, this.id));
    this.httpService.set_stoks(this.stocks).subscribe();
  }

  Init() {
    this.httpService.get_stoks().subscribe((date: any) => {
      this.stocks = date;
      console.log(this.stocks);
    });
  }

}
