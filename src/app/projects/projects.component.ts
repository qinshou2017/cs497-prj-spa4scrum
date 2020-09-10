import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from "./projects.service";
import { APIService } from "../API.service";
import { MatDrawer } from '@angular/material/sidenav';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddOrEditBoardComponent } from "./add-or-edit-board/add-or-edit-board.component";

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  get isPrjDB(): boolean {
    return this.location.path() == "/prj/dashboard";
  };

  @ViewChild("sideNav")
  public sideNav: MatDrawer;

  constructor(
    private location: Location,
    public prjsService: ProjectsService,
    private dialog: MatDialog,
    private api: APIService,
    private router: Router,
    public translate: TranslateService,
  ) {
    translate.setTranslation("en", {
      "sideNav": {
        "Project": "Project",
        "product_backlog": "Product Backlog",
        "sprint_backlog": "Sprint Backlog",
        "dashboard": "Dashboard",
        "create_new_board": "Create new board",
      }
    }, true);
    translate.setTranslation("zh_cn", {
      "sideNav": {
        "Project": "项目列表",
        "product_backlog": "产品待办列表",
        "sprint_backlog": "Sprint 待办列表",
        "dashboard": "仪表盘",
        "create_new_board": "创建新板块",
      }
    }, true);
  }

  sprs = [];
  prds = [];

  async initBoard() {
    let boards = await this.prjsService.getAllBoardByCurrentPrj();
    if (!boards) return;
    this.sprs = []; this.prds = [];
    boards.items.forEach(board => {
      switch(board.category) {
      case "Product":
        this.prds.push(board);
        break;
      case "Sprint":
        this.sprs.push(board);
        break;
      }
    });
    this.sprs.sort((a, b) => a.createdTime - b.createdTime);
    this.prds.sort((a, b) => a.createdTime - b.createdTime);
  }

  ngOnInit() {
    this.prjsService.onProjectChange(async prj => {
      if (!prj) return;
      await this.initBoard();
    });
    this.api.OnDeleteBoardListener.subscribe((event: any) => {
      const boardId = event.value.data.onDeleteBoard.id;
      [this.sprs, this.prds].forEach(arr => {
        let t = arr.findIndex(b => b.id === boardId);
        if (t === -1) return;
        arr.splice(t, 1);
      });
    });
  }
  // ngAfterViewInit() { console.log(this.sideNav); }

  onCreateBoard() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { project: this.prjsService.currentPrj };
    const dialogRef = this.dialog.open(AddOrEditBoardComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async board => {
      if (!board) return;
      await this.initBoard();
      // switch(board.category) {
      // case "Product":
      //   this.prds.push(board);
      //   break;
      // case "Sprint":
      //   this.sprs.push(board);
      //   break;
      // }
      // this.sprs.sort((a, b) => a.createdTime - b.createdTime);
      // this.prds.sort((a, b) => a.createdTime - b.createdTime);
      this.router.navigateByUrl(`/prj/${
        this.prjsService.currentPrj.id}/${
          board.category === "Product"? "prd": "spr"}/${
            board.id}`);
    });
  }

}
