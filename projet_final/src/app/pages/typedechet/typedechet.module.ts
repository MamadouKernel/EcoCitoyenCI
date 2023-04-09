import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTypedechetComponent } from './list-typedechet/list-typedechet.component';
import { AddTypedechetComponent } from './add-typedechet/add-typedechet.component';
import { TypedechetRoutingModule } from './typedechet-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListTypedechetComponent,
    AddTypedechetComponent,
  ],
  imports: [
    CommonModule,
    TypedechetRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TypedechetModule { }
