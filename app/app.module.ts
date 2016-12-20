import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { GroceriesModule } from './groceries/groceries.module';
import { AppComponent }  from './app.component';
import { MDLDirective } from './mdl.directive';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    GroceriesModule
  ],
  declarations: [
    AppComponent,
    MDLDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
