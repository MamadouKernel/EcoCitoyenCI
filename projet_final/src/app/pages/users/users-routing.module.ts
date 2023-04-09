import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [
  {path: "list-user", component: ListUserComponent},
  {path: "add-user", component: AddUserComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
