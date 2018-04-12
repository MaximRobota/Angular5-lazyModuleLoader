import {Component} from '@angular/core';

import {TestService} from './test.service';

@Component({
  selector: 'test2',
  styles: [
    `.test2 {
      background-color: #FDFDFD;
      margin: 15px;
    }`
  ],
  template: `<div class="test2">
    <div><b>Test component 2</b></div>
    <label>
      Value:
      <input #input>
      <button (click)="addValue(input.value)">Add</button>
    </label>
    <hr>
    <p *ngFor="let item of items; let i = index;">
      {{i}} - {{item}}
    </p>
  </div>`,
  providers: [TestService]
})
export class Test2Component {
  get items() {
    return this._service.getData();
  }

  constructor(private _service: TestService) {}

  addValue(value) {
    this._service.addData(value);
  }
}
