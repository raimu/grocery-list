import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { GroceriesModule } from './groceries/groceries.module';
import { AppComponent }  from './app.component';
import { ToolbarComponent } from './toolbar.component';
import { MDLDirective } from './mdl.directive';
import { ToolbarService } from './toolbar.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    GroceriesModule
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    MDLDirective
  ],
  providers: [
    ToolbarService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
