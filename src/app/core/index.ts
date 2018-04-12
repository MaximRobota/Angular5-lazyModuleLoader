import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
/*import * as directives from './directives';
import * as pipes from './pipes';
import * as services from './services';*/

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent, HeaderComponent, FooterComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
