import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { GroceriesRoutingModule } from './groceries-routing.module';
import { GroceriesComponent } from './groceries.component';
import { ItemDetailComponent } from './item-detail.component';
import { AddItemComponent } from './add-item.component';
import { ItemFormComponent } from './item-form.component';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    GroceriesRoutingModule
  ],
  declarations: [
    GroceriesComponent,
    ItemDetailComponent,
    AddItemComponent,
    ItemFormComponent
  ],
  providers: [
    ItemService
  ],
  exports: [
    GroceriesComponent
  ]
})
export class GroceriesModule { }
