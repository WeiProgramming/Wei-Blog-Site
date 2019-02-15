import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatTabsModule,
  MatProgressBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
