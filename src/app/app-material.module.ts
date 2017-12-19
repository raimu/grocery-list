import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatInputModule,
  MatIconModule,
  MatListModule,
 } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ],
})
export class AppMaterialModule { }
