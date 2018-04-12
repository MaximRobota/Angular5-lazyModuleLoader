import {Component} from '@angular/core';

import {TestService} from './test.service';

@Component({
  selector: 'test1',
  styles: [
    `.test1 {
      background-color: #EAEAEA;
    }`
  ],
  template: `<div class="test1">
    <div><b>Test component 1</b></div>
    <label>
      Value:
      <input #input>
      <button (click)="addValue(input.value)">Add</button>
    </label>
    <hr>
    <p *ngFor="let item of items; let i = index;">
      {{i}} - {{item}}
    </p>
    <test2></test2>
  </div>`
})
export class Test1Component {
  get items() {
    return this._service.getData();
  }

  constructor(private _service: TestService) {}

  addValue(value) {
    this._service.addData(value);
  }
}
