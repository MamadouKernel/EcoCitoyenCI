import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCollecteComponent } from './list-collecte/list-collecte.component';
import { AddCollecteComponent } from './add-collecte/add-collecte.component';
import { CollecteRoutingModule } from './collecte-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCollecteComponent,
    AddCollecteComponent,
  ],
  imports: [
    CommonModule,
    CollecteRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CollecteModule { }
