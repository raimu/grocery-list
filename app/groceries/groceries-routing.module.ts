import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceriesComponent } from './groceries.component';
import { ItemDetailComponent } from './item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/groceries', pathMatch: 'full' },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'groceries',  component: GroceriesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class GroceriesRoutingModule {}
