import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDechetComponent } from './add-dechet/add-dechet.component';
import { ListDechetComponent } from './list-dechet/list-dechet.component';

const routes: Routes = [
  {path: "list-dechet", component: ListDechetComponent},
  {path: "add-dechet", component: AddDechetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DechetsRoutingModule { }
