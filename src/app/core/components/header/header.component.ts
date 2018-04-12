import {Component} from '@angular/core';
import {SharedService} from '../../../features/shared/shared.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  template: `<header class="header">
    <a class="header-link" routerLink="/">Home</a>
    <button style="margin: 15px 50px 0 0; float: right;" (click)="click()">Click me!</button>
  </header>`
})
export class HeaderComponent {
  constructor(private _service: SharedService) {}

  click() {
    this._service.greeting();
  }
}
