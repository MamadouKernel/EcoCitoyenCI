import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthentificationComponent} from "./pages/authentification/authentification.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "authentification"},
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [

      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: WelcomeComponent},
      {
        path: "users",
        loadChildren: () => import("./pages/users/users.module").then(value => value.UsersModule),

      },
      
      {
        path: "roles",
        loadChildren: () => import("./pages/roles/roles.module").then(value => value.RolesModule),
      },

      {
        path: "collectes",
        loadChildren: () => import("./pages/collectes/collecte.module").then(value => value.CollecteModule),
      },

      {
        path: "typedechet",
        loadChildren: () => import("./pages/typedechet/typedechet.module").then(value => value.TypedechetModule),

      },

      {
        path: "dechets",
        loadChildren: () => import("./pages/dechets/dechets.module").then(value => value.DechetsModule),
      },

      {
        path: "traitement",
        loadChildren: () => import("./pages/traitement/traitement.module").then(value => value.TraitementModule),
      },

    ],
  },
  {
    path: "authentification",
    component: AuthentificationComponent,
    loadChildren: () => import("./pages/authentification/authentification.module").then(m => m.AuthentificationModule),
  },
  {path: "**", redirectTo: "authentification", pathMatch: "full"},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
