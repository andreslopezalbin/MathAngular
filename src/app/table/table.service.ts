import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getEquation() {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    let res_out = x + y;
    let res = true;

    const rand = Math.floor(Math.random() * 3);
    if (rand === 1) {
      res_out += 1;
      res = false;
    } else if (rand === 2) {
      res_out -= 1;
      res = false;
    }

    const equation: string = x.toString() + ' + ' + y.toString() + ' = ' + res_out.toString();
    return [equation, res];
  }
}
