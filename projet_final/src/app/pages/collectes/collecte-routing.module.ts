import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCollecteComponent } from './add-collecte/add-collecte.component';
import { ListCollecteComponent } from './list-collecte/list-collecte.component';

const routes:Routes = [
  {path:"add-collecte",component:AddCollecteComponent},
  {path:"list-collecte",component:ListCollecteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CollecteRoutingModule { }
