import { Component } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  template: `<p style="position: relative;width: 100%; height: 100%;">
    <img style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="../../../assets/images/kitty.gif"/>
    <br/>
    <button (click)="click()">Click me!</button>
  </p>`
})
export class LazyComponent {
  constructor(private _service: SharedService) {}

  click() {
    this._service.greeting();
  }
}
