import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatCardModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
})
export class AppMaterialModule { }
