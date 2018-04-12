import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Test1Component} from './test1.component';
import {Test2Component} from './test2.component';
import {TestService} from './test.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Test1Component, Test2Component],
  providers: [TestService],
  exports: [Test1Component, Test2Component]
})
export class ExampleModule {}
