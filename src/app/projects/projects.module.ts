import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { ProjectsComponent } from './projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SprintComponent } from './sprint/sprint.component';
import { DashboardComponent as SprintDashboardComponent } from './sprint/dashboard/dashboard.component';
import { ProjectCreateOrModifyComponent } from './dashboard/project-create-or-modify/project-create-or-modify.component';
import { CreateOrEditCardComponent } from './product/create-or-edit-card/create-or-edit-card.component';
import { PrjInfoComponent } from './prj-info/prj-info.component';
import { AddOrEditBoardComponent } from './add-or-edit-board/add-or-edit-board.component';

import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

import { NgxEchartsModule } from "ngx-echarts";

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
    MaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    TranslateModule.forChild({
      defaultLanguage: "en",
    }),
  ],
  declarations: [
    ProjectsComponent,
    DashboardComponent,
    ProductComponent,
    SprintComponent,
    SprintDashboardComponent,
    ProjectCreateOrModifyComponent,
    CreateOrEditCardComponent,
    AddOrEditBoardComponent,
    PrjInfoComponent,
    LoadingScreenComponent,
  ],
})
export class ProjectsModule { }
