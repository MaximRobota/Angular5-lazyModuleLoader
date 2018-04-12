import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedService} from './shared.service';
import {SharedComponent} from './shared.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedComponent],
  providers: [SharedService],
  exports: [SharedComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
      , providers: [SharedService]
    };
  }
}
