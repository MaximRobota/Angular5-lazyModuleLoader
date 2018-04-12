import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { routing } from './lazy.routing';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
