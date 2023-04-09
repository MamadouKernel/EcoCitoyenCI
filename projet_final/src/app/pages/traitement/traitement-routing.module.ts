import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTraitementComponent } from './add-traitement/add-traitement.component';
import { ListTraitementComponent } from './list-traitement/list-traitement.component';

const routes: Routes = [
  {path:"add-traitement", component:AddTraitementComponent},
  {path:"list-traitement", component:ListTraitementComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitementRoutingModule { }
