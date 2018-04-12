import {Component} from '@angular/core';

import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-inner',
  template: `<div>
    Child
    <button (click)="click()">Click Me!</button>
  </div>`
})
export class InnerComponent {
  constructor(private service: SharedService) {}

  click() {
    this.service.greeting();
  }
}
