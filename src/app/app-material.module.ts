import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatInputModule,
  MatIconModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
})
export class AppMaterialModule { }
