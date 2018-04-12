import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './core/components/home/home.component';
import {Test1Component} from './features/service/test1.component';
import {SharedComponent} from './features/shared/shared.component';
import {ParentComponent} from './features/cmpDI/parent.component';
import {OuterComponent} from './features/inheritance/outer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'example1', component: Test1Component},
  {path: 'lazy', loadChildren: './features/lazy/lazy.module#LazyModule'},
  {path: 'shared', component: SharedComponent},
  {path: 'comp_di', component: ParentComponent},
  {path: 'inheritance', component: OuterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
