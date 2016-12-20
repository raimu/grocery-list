import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { GroceriesComponent } from './groceries.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GroceriesComponent,
    ItemDetailComponent
  ],
  providers: [
    ItemService
  ],
  exports: [
    GroceriesComponent
  ]
})
export class GroceriesModule { }
