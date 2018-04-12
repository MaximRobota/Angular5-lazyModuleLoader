import {Component} from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-parent',
  providers: [SharedService],
  template: `<div>
    Parent
    <button (click)="click()">Outer</button>
    <app-inner></app-inner>
  </div>`
})
export class OuterComponent {
  constructor(private service: SharedService) {}

  click() {
    this.service.greeting();
  }
}
