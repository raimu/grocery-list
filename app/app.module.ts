import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GroceriesModule } from './groceries/groceries.module';
import { AppComponent }  from './app.component';
import { MDLDirective } from './mdl.directive';

@NgModule({
  imports: [
    BrowserModule,
    GroceriesModule
  ],
  declarations: [
    AppComponent,
    MDLDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
