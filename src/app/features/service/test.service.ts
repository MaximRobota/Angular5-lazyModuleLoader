import {Injectable} from '@angular/core';

@Injectable()
export class TestService {
  private _data = [];

  getData() {
    return this._data.slice();
  }

  addData(v) {
    this._data.push(v);
  }
}
