import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatFormFieldModule, MatFormFieldControl, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class AppMaterialModule { }
