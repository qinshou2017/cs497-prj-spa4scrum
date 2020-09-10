import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';
import { APIService } from "../../API.service";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ProjectCreateOrModifyComponent } from "./project-create-or-modify/project-create-or-modify.component";
import { CreateOrModifyProjectsService } from "../create-or-modify-projects.service";
// import { GetUser } from "../../graphql.service";
import { ProjectsService } from "../projects.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public prjsService: ProjectsService,
    public cOrMPrjService: CreateOrModifyProjectsService,
    private dialog: MatDialog,
    public translate: TranslateService,
  ) {
    translate.setTranslation("en", {
      "project_dashboard": {
        "title": "Project",
        "setting": "Setting",
        "remove": "Remove",
        "no_prj1": "You currently have no projects",
        "no_prj2": "Let's create your first project",
        "create_prj_btn": "Create project",
      }
    }, true);
    translate.setTranslation("zh_cn", {
      "project_dashboard": {
        "title": "项目列表",
        "setting": "设置",
        "remove": "删除",
        "no_prj1": "您目前没有项目",
        "no_prj2": "让我们创建您的第一个项目",
        "create_prj_btn": "新建项目",
      }
    }, true);
  }
  get projects() {
    return this.prjsService.currentPrjs;
  }
  async ngOnInit() {
    const prj = await this.prjsService.getAllProjectsByCurrentUser();
  }


  // currentUser;
  // projects;
  // constructor(public api: APIService,
  //   public cOrMPrjService: CreateOrModifyProjectsService,
  //   private dialog: MatDialog) { }

  // async ngOnInit() {
  //   const uinfo = await Auth.currentUserInfo(),
  //         uid = uinfo.attributes.sub;
  //   this.currentUser = await GetUser(uid);
  //   this.projects = this.currentUser.projects.items.map(ps => ps.project);
  //   this.api.OnCreateProjectListener.subscribe((event: any) => {
  //     console.log("OnCreateProjectListener", event);
  //     this.projects.push(event.value.data.onCreateProject);
  //   });
  //   this.api.OnUpdateProjectListener.subscribe((event: any) => {
  //     console.log("OnUpdateProjectListener", event);
  //     const prj = event.value.data.onUpdateProject;
  //     this.projects.some(p => {
  //       if (p.id === prj.id) {
  //         p.name = prj.name;
  //         p.description = prj.description;
  //         return true;
  //       }
  //       return false;
  //     });
  //   });
  //   this.api.OnDeleteProjectListener.subscribe((event: any) => {
  //     console.log("OnDeleteProjectListener", event);
  //     const did = event.value.data.onDeleteProject.id;
  //     this.projects.some((prj, i, prjs) => {
  //       if (prj.id === did) {
  //         prjs.splice(i, 1);
  //         return true;
  //       }
  //       return false;
  //     });
  //   });
  //   this.api.OnCreateProejctMembersListener.subscribe((event: any) => {
  //     console.log("OnCreateProejctMembersListener", event);
  //     const memberRelationship = event.value.data.onCreateProejctMembers;
  //     this.projects.find(prj => prj.id === memberRelationship.projectId)
  //       ?.members.items.push(memberRelationship);
  //   });
  //   this.api.OnDeleteProejctMembersListener.subscribe((event: any) => {
  //     console.log("OnDeleteProejctMembersListener", event);
  //     const memberRelationship = event.value.data.onDeleteProejctMembers;
  //     const prj = this.projects.find(prj => prj.id === memberRelationship.projectId);
  //     prj?.members.items.some((mr, i, mrs) => {
  //       if (mr.id === memberRelationship.id) {
  //         mrs.splice(i, 1);
  //         return true;
  //       }
  //       return false;
  //     });
  //   });
  // }

  onCreateProject() {
    this.cOrMPrjService.setCurrentProject();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ProjectCreateOrModifyComponent, dialogConfig);
  }

  onModifyProject(prj) {
    this.cOrMPrjService.setCurrentProject(prj);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ProjectCreateOrModifyComponent, dialogConfig);
  };

  async onRemoveProject(prj) {
    await this.cOrMPrjService.removeProject(prj);
  }

}
