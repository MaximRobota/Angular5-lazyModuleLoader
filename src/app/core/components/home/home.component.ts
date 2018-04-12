import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ul style="font-size: 38px;">
      <li>
        <a routerLink="/example1">Simple Service</a>
      </li>
      <li>
        <a routerLink="/lazy">Lazy Module</a>
      </li>
      <li>
        <a routerLink="/shared">Shared Module</a>
      </li>
      <li>
        <a routerLink="/comp_di">Component DI</a>
      </li>
      <li>
        <a routerLink="/inheritance">Service Cascade</a>
      </li>
    </ul>
  `
})
export class HomeComponent {}
