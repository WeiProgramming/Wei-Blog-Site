import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
