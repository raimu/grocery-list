import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { GroceriesModule } from './groceries/groceries.module';
import { CoreModule }      from './core/core.module';
import { AppComponent }    from './app.component';
import { ToolbarService }  from './toolbar.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    GroceriesModule,
    CoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ToolbarService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
