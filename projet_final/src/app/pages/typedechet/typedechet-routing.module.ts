import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypedechetComponent } from './add-typedechet/add-typedechet.component';
import { ListTypedechetComponent } from './list-typedechet/list-typedechet.component';

const routes: Routes = [

  {path: "list-typedechet", component: ListTypedechetComponent},
  {path: "add-typedechet", component: AddTypedechetComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypedechetRoutingModule {}
