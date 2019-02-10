import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatSidenavModule, MatListModule,   MatIconModule,} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: []
})
export class MaterialModule { }
