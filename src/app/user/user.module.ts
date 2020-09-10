import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import { MaterialModule } from '../material.module';

import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule, AmplifyUIAngularModule,
  ]
})
export class UserModule { }
