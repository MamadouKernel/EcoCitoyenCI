import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
    ],
})
export class UsersModule { }
