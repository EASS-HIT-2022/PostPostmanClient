import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


const modules = [MatCardModule, MatRippleModule, MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules]
})
export class MaterialModule { }
