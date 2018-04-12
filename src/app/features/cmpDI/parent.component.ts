import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<div>
    Parent
    <app-child></app-child>
  </div>`
})
export class ParentComponent {
  title = 'I\`m parent component!fdsfsdfsdfsdfsdfsdf';

  constructor() {}
}
