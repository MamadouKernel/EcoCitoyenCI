import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDechetComponent } from './add-dechet/add-dechet.component';
import { ListDechetComponent } from './list-dechet/list-dechet.component';
import { DechetsRoutingModule } from './dechets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddDechetComponent,
    ListDechetComponent,
  ],
  imports: [
    CommonModule,
    DechetsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DechetsModule { }
