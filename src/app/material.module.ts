import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

// import { FlexLayoutModule } from "@angular/flex-layout";

// import {RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS} from "@angular/material/core";
// const globalRippleConfig: RippleGlobalOptions = {
//   disabled: false,
//   animation: {
//     enterDuration: 30000,
//     exitDuration: 100000
//   }
// };

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule,
  //   MatToolbarModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   MatCardModule,
  //   MatRippleModule,
  //   MatSidenavModule,
  //   MatListModule,
  //   MatMenuModule,
  //   MatInputModule,
  //   MatFormFieldModule,
  //   MatCheckboxModule,
  //   MatGridListModule,
  //   MatDialogModule,
  // ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatRadioModule,
    MatAutocompleteModule,
    
    MatNativeDateModule,
    MatDatepickerModule,

    DragDropModule,

    // FlexLayoutModule,
  ],
  // providers: [
  //   {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  // ]
})
export class MaterialModule { }
