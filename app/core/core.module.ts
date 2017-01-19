import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';

import { ToolbarComponent }  from './toolbar.component';
import { MDLDirective }      from './mdl.directive';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ToolbarComponent, MDLDirective ],
  exports:      [ ToolbarComponent, MDLDirective ],
})
export class CoreModule {
}