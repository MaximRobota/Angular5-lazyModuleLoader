import {Injectable} from '@angular/core';

let id = 0;

@Injectable()
export class SharedService {
  id: number;

  constructor() {
    this.id = id;
    id++;
  }

  greeting() {
    alert(`Hello, from service ${this.id}`);
  }
}
