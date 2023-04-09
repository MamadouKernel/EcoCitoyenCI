import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListRoleComponent} from './list-role/list-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RolesRoutingModule } from './roles-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListRoleComponent,
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RolesModule { }

