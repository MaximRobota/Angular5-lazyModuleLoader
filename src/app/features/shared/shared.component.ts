import {Component} from '@angular/core';

import {SharedService} from './shared.service';

@Component({
  selector: 'app-shared',
  template: `<div>
    <button (click)="click()">Click me!</button>
  </div>`
})
export class SharedComponent {
  constructor(private _service: SharedService) {}

  click() {
    this._service.greeting();
  }
}
