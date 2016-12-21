import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceriesComponent } from './groceries.component';
import { ItemDetailComponent } from './item-detail.component';
import { AddItemComponent } from './add-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/groceries', pathMatch: 'full' },
  { path: 'groceries/detail/:id', component: ItemDetailComponent },
  { path: 'groceries/add', component: AddItemComponent },
  { path: 'groceries',  component: GroceriesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class GroceriesRoutingModule {}
