import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { APIService, BoardCategory } from "../../API.service";
import { GetBoardsByProjectId } from "../../graphql.service";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { UserStoryService } from "./user-story.service";
import { CreateOrEditCardComponent } from "./create-or-edit-card/create-or-edit-card.component";
import { ProjectsService } from "../projects.service";
import { AddOrEditBoardComponent } from "../add-or-edit-board/add-or-edit-board.component";

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  nowPrjID: string;
  nowPrj;
  get nowPrdID() { return this.nowPrd?.id; }
  private boards;
  set nowPrdID(prdID) {
    console.log(prdID, this.boards)
    let board = this.nowPrd = prdID
      ? this.boards.items.filter(board => board.id == prdID)[0]
      : this.boards.items.filter(board => board.category === BoardCategory.Product)[0];
    this.usrStorys = board.cards?.items.map(this.iniCard);
    this.usrStorys.sort((s1, s2) => s1.createdTime - s2.createdTime);
    this.usService.setCurrentPrj(this.nowPrjID);
    this.usService.setCurrentBoard(board);
  }
  nowPrd;
  usrStorys;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    public api: APIService,
    public prjsService: ProjectsService,
    private dialog: MatDialog, public usService: UserStoryService,
    public translate: TranslateService,
  ) {
    this.iniCard = this.iniCard.bind(this);
    translate.setTranslation("en", {
      "product_board": {
        "breadcrumb_nav": "Product Backlog",
      },
    }, true);
    translate.setTranslation("zh_cn", {
      "product_board": {
        "breadcrumb_nav": "产品代办列表",
      },
    }, true);
  }

  iniCard(card) {
    card.board = this.nowPrd;
    card.createdTime = new Date(card.createdAt);
    card.updatedTime = new Date(card.updatedAt);
    const td = Math.floor(card.totalTime / 60 / 60 / 24),
          th = Math.floor(card.totalTime / 60 / 60) - td * 24,
          tm = Math.floor(card.totalTime / 60) - td * 24 * 60 - th * 60;
    card.totalTimeString =
      (td? td + " day" + (td > 1? "s": "") + " ": "") +
      (th? th + " hour" + (th > 1? "s": "") + " ": "") +
      (tm? tm + " minute" + (tm > 1? "s": ""): "");
    return card;
  }

  async ngOnInit() {
    this.nowPrjID = this.actRoute.parent.snapshot.paramMap.get('prjID');
    // let boards = await GetBoardsByProjectId(this.nowPrjID);
    // console.log(boards);
    this.nowPrj = await this.prjsService.getProjectById(this.nowPrjID);
    let boards = await this.prjsService.getAllBoardByCurrentPrj();
    let prdID = this.actRoute.snapshot.paramMap.get("prdID");
    // console.log(prdID)
    // let board = this.nowPrd = prdID
    //   ? boards.items.filter(board => board.id == prdID)[0]
    //   : boards.items.filter(board => board.category === BoardCategory.Product)[0];
    // this.usrStorys = board.cards.items.map(this.iniCard);
    // this.usrStorys.sort((s1, s2) => s1.createdTime - s2.createdTime);
    // this.usService.setCurrentPrj(this.nowPrjID);
    // this.usService.setCurrentBoard(board);
    this.boards = boards;
    this.nowPrdID = prdID;
    console.log(this);
    this.actRoute.params.subscribe(params => {
      this.nowPrdID = params.prdID;
    });
    this.api.OnCreateBoardListener.subscribe((event: any) => {
      this.prjsService.getAllBoardByCurrentPrj().then(boards => this.boards = boards);
    });

    this.api.OnCreateCardListener.subscribe((event: any) => {
      console.log("OnCreateCardListener", event);
      const card = event.value.data.onCreateCard;
      if (card.boardId !== this.nowPrd.id) return;
      this.usrStorys.push(this.iniCard(card));
    });
    this.api.OnUpdateCardListener.subscribe((event: any) => {
      console.log("OnUpdateCardListener", event);
      const card = event.value.data.onUpdateCard,
            usrStory = this.usrStorys.find(us => us.id === card.id);
      if (!usrStory) return;
      if (card.boardId != usrStory.boardId) {
        this.usrStorys.splice(this.usrStorys.indexOf(usrStory), 1);
      }
      else {
        this.usrStorys.splice(this.usrStorys.indexOf(usrStory), 1, this.iniCard(card));
      }
    });
    this.api.OnDeleteCardListener.subscribe((event: any) => {
      console.log("OnDeleteCardListener", event);
      const card = event.value.data.onDeleteCard;
      this.usrStorys.splice(this.usrStorys.indexOf(this.usrStorys.find(us => us.id === card.id)), 1);
    });
  }

  onCreateUsrStory() {
    this.usService.setCurrentCard();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateOrEditCardComponent, dialogConfig);
  }

  onModifyUsrStory(usrStory) {
    this.usService.setCurrentCard(usrStory);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateOrEditCardComponent, dialogConfig);
  }

  onRemoveUsrStory(usrStory, $event) {
    if ($event) $event.stopPropagation();
    this.usService.removeCard(usrStory);
  }

  onEditBoard(nowPrd = this.nowPrd) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {
      project: this.prjsService.currentPrj,
      board: nowPrd,
    };
    const dialogRef = this.dialog.open(AddOrEditBoardComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(board => {
      // console.log('The dialog was closed', board);
      if (!board) return;
      if (board.delete) {
        this.router.navigateByUrl(`/prj/${this.nowPrjID}/prd`);
        return;
      }
      // this.nowPrd.name = board.name;
      // this.nowPrd.description = board.description;
      this.router.navigateByUrl(`/prj/${this.nowPrdID}/prd/${board.id}`);
    });
  }
}
