import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRoleComponent } from "./add-role/add-role.component";
import { ListRoleComponent } from "./list-role/list-role.component";

const routes: Routes = [
  {path: "list-role", component: ListRoleComponent},
  {path: "add-role", component: AddRoleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {
}