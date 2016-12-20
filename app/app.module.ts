import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MDLDirective } from './mdl.directive';
import { GroceriesComponent } from './groceries.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MDLDirective,
    GroceriesComponent,
    ItemDetailComponent
  ],
  providers: [
    ItemService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
