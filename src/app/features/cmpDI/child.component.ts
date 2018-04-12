import {Component} from '@angular/core';

import {ParentComponent} from './parent.component';

@Component({
  selector: 'app-child',
  template: `<div>
    Child
    <button (click)="click()">Click Me!</button>
  </div>`
})
export class ChildComponent {
  constructor(private parent: ParentComponent) {}

  click() {
    console.log(this.parent);
  }
}
