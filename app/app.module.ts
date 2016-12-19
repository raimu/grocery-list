import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MDLDirective } from './mdl.directive';
import { GroceriesComponent } from './groceries.component';
import { ItemService } from './item.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    MDLDirective,
    GroceriesComponent
  ],
  providers: [
    ItemService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
