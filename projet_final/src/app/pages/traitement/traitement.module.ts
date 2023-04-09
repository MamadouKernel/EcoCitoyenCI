import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTraitementComponent } from './list-traitement/list-traitement.component';
import { AddTraitementComponent } from './add-traitement/add-traitement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TraitementRoutingModule } from './traitement-routing.module';



@NgModule({
  declarations: [
    ListTraitementComponent,
    AddTraitementComponent
  ],
  imports: [
    CommonModule,
    TraitementRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TraitementModule {}
