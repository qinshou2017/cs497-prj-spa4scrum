import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from "../projects.service";
import { APIService, BoardCategory, CardStatus } from "../../API.service";
import { GetBoardsByProjectId } from "../../graphql.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddOrEditBoardComponent } from "../add-or-edit-board/add-or-edit-board.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  swimlane:any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public api: APIService,
    public prjsService: ProjectsService,
    private dialog: MatDialog, 
    public translate: TranslateService,
  ) {
    this.iniCard = this.iniCard.bind(this);
    translate.setTranslation("en", {
      "sprint_board": {
        "breadcrumb_nav": "Sprint Backlog",
      },
    }, true);
    translate.setTranslation("zh_cn", {
      "sprint_board": {
        "breadcrumb_nav": "Sprint代办列表",
      },
    }, true);
  }

  iniCard(card) {
    if (card.boardId === this.nowSpr.id)
      card.board = this.nowSpr;
    card.createdTime = new Date(card.createdAt);
    card.updatedTime = new Date(card.updatedAt);
    const tt2s = (tt) => {
      tt = tt || 0;
      const td = Math.floor(tt / 60 / 60 / 24),
            th = Math.floor(tt / 60 / 60) - td * 24,
            tm = Math.floor(tt / 60) - td * 24 * 60 - th * 60;
      return ((td? td + " day" + (td > 1? "s": "") + " ": "") +
        (th? th + " hour" + (th > 1? "s": "") + " ": "") +
        (tm? tm + " minute" + (tm > 1? "s": ""): "")) || "0";
    };
    card.totalTimeString = tt2s(card.totalTime);
    card.currentDurationString = tt2s(card.currentDuration);
    return card;
  }
  usrStoryTimer(us) {
    return window.setInterval(() => {
      const tt = Math.floor((new Date()).getTime() / 1000);
      const currentDuration = Math.min(us.totalTime,
        Math.floor((us.currentDuration || 0) + tt - us.lastActivityAt));
      // us.currentDuration = currentDuration;
      // us.lastActivityAt = tt;
      const tt2s = (tt) => {
        tt = tt || 0;
        const td = Math.floor(tt / 60 / 60 / 24),
              th = Math.floor(tt / 60 / 60) - td * 24,
              tm = Math.floor(tt / 60) - td * 24 * 60 - th * 60;
        return ((td? td + " day" + (td > 1? "s": "") + " ": "") +
          (th? th + " hour" + (th > 1? "s": "") + " ": "") +
          (tm? tm + " minute" + (tm > 1? "s": ""): "")) || "0";
      };
      us.currentDurationString = tt2s(currentDuration);
    }, 1000);
  }

  getRouteParams(param) {
    let r = this.route;
    while (r) {
      let id = r.snapshot.paramMap.get(param);
      if (id) return id;
      r = r.parent;
    }
    return null;
  }
  get nowPrjID() { return this.getRouteParams("prjID"); }
  nowPrj;
  allUsrStorys;
  private boards;
  get nowSprID() { return this.nowSpr.id; }
  set nowSprID(sprID) {
    console.log(sprID)
    let board = this.nowSpr = sprID
      ? this.boards.items.filter(board => board.id == sprID)[0]
      : this.boards.items.filter(board => board.category === BoardCategory.Sprint)[0];
    this.allUsrStorys = this.boards.items
      .reduce((arr, board) => {arr.push(...board.cards.items); return arr;}, [])
      .filter(card => card.board.category === BoardCategory.Product? true: card.belongCardID)
      .map(this.iniCard)
      .sort((c1: any, c2: any) => c1.createdTime - c2.createdTime);
    let usrStorys = board.cards.items.map(this.iniCard);
    this.swimlane = <any>usrStorys.filter(us => !us.belongCardID).map((card: any) => {
      card.usrStorys = usrStorys.filter(us => us.belongCardID === card.id);
      card.usrStorys.forEach(us => {
        if (us.status == "stop") return;
        us.timer = this.usrStoryTimer(us);
      });
      return card;
    }).sort((us1, us2) => us1.createdTime - us2.createdTime);
  }
  nowSpr;
  async ngOnInit() {
    console.log(this);
    this.nowPrj = await this.prjsService.getProjectById(this.nowPrjID);
    let boards = await this.prjsService.getAllBoardByCurrentPrj();

    // let boards = await GetBoardsByProjectId(this.nowPrjID);
    // boards.items.forEach(board => board.cards.items.forEach((card: any) => card.createdTime = new Date(card.createdAt)));
    this.boards = boards;
    this.nowSprID = this.getRouteParams("sprID");
    // let sprID = this.getRouteParams("sprID");
    // let board = this.nowSpr = sprID
    //   ? boards.items.filter(board => board.id == sprID)[0]
    //   : boards.items.filter(board => board.category === BoardCategory.Sprint)[0];
    // this.allUsrStorys = boards.items
    //   .reduce((arr, board) => {arr.push(...board.cards.items); return arr;}, [])
    //   .filter(card => card.board.category === BoardCategory.Product? true: card.belongCardID)
    //   .map(this.iniCard)
    //   .sort((c1: any, c2: any) => c1.createdTime - c2.createdTime);
    // let usrStorys = board.cards.items.map(this.iniCard);
    // this.swimlane = <any>usrStorys.filter(us => !us.belongCardID).map((card: any) => {
    //   card.usrStorys = usrStorys.filter(us => us.belongCardID === card.id);
    //   card.usrStorys.forEach(us => {
    //     if (us.status == "stop") return;
    //     us.timer = this.usrStoryTimer(us);
    //   });
    //   return card;
    // }).sort((us1, us2) => us1.createdTime - us2.createdTime);

    this.route.params.subscribe(params => {
      this.nowSprID = params.sprID;
    });
    this.api.OnCreateCardListener.subscribe((event: any) => {
      console.log("OnCreateCardListener", event);
      const card = event.value.data.onCreateCard;
      if (card.board.category === BoardCategory.Product && !card.belongCardID) {
        this.allUsrStorys.push(card);
      }
    });
    // this.api.OnUpdateCardListener.subscribe((event: any) => {
    //   console.log("OnUpdateCardListener", event);
    //   const card = event.value.data.onUpdateCard,
    //         usrStory = this.usrStorys.find(us => us.id === card.id);
    //   if (card.boardId != usrStory.boardId) {
    //     this.usrStorys.splice(this.usrStorys.indexOf(usrStory), 1);
    //   }
    //   usrStory.boardId = card.boardId;
    //   usrStory.title = card.title;
    //   usrStory.subTitle = card.subTitle;
    //   usrStory.content = card.content;
    // });
    // this.api.OnDeleteCardListener.subscribe((event: any) => {
    //   console.log("OnDeleteCardListener", event);
    //   const card = event.value.data.onDeleteCard;
    //   this.usrStorys.splice(this.usrStorys.indexOf(this.usrStorys.find(us => us.id === card.id)), 1);
    // });
  }

  get otherUsrStorys() {
    let others = this.allUsrStorys.filter(card => card.board.category === BoardCategory.Product);
    return others;
  }
  showList = false;
  nowLane;
  onShowList(lane) {
    this.showList = true;
    this.nowLane = lane;
  }
  onCloseList() {
    this.showList = false;
  }
  async addUsrStory(usrStory) {
    return this.addUsrStorys([usrStory]);
  }
  async addSelectedUsrStorys(MatListOptions) {
    return this.addUsrStorys(MatListOptions.map(o => o.value));
  }
  async addUsrStorys(usrStorys) {
    console.log(usrStorys);
    if (!usrStorys.length) return;
    await Promise.all(usrStorys.map(usrStory => this.api.UpdateCard({
      id: usrStory.id,
      belongCardID: this.nowLane.id,
      boardId: this.nowSpr.id,
    })));
    this.nowLane.usrStorys.push(...usrStorys);
    this.onCloseList();
  }

  drop(event) {
    const pid = event.previousContainer.data, cid = event.container.data;
    const p = this.swimlane.find(l => l.id === pid)?.usrStorys,
          c = this.swimlane.find(l => l.id === cid)?.usrStorys,
          card = p[event.previousIndex];
    p.splice(event.previousIndex, 1);
    c.splice(event.currentIndex, 0, card);
    if (event.previousContainer === event.container) return;
    this.api.UpdateCard({
      id: card.id,
      belongCardID: cid,
    });
  }

  onStart(usrStory) {
    const time = Math.floor((new Date()).getTime() / 1000);
    usrStory.status = "doing";
    usrStory.lastActivityAt = time;
    this.api.UpdateCard({
      id: usrStory.id,
      status: CardStatus.doing,
      lastActivityAt: usrStory.lastActivityAt,
    });
    usrStory.timer = this.usrStoryTimer(usrStory);
  }
  onStop(usrStory) {
    const time = Math.floor((new Date()).getTime() / 1000);
    usrStory.status = "stop";
    usrStory.currentDuration = Math.min(usrStory.totalTime,
      Math.floor((usrStory.currentDuration || 0) + time - usrStory.lastActivityAt));
    usrStory.lastActivityAt = time;
    window.clearInterval(usrStory.timer);
    this.api.UpdateCard({
      id: usrStory.id,
      currentDuration: usrStory.currentDuration,
      status: CardStatus.stop,
      lastActivityAt: usrStory.lastActivityAt,
    });
  }

  onEditBoard(nowSpr = this.nowSpr) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {
      project: this.prjsService.currentPrj,
      board: nowSpr,
    };
    const dialogRef = this.dialog.open(AddOrEditBoardComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(board => {
      // console.log('The dialog was closed', board);
      if (!board) return;
      if (board.delete) {
        this.router.navigateByUrl(`/prj/${this.nowPrjID}/spr`);
        return;
      }
      // this.nowSpr.name = board.name;
      // this.nowSpr.description = board.description;
      this.router.navigateByUrl(`/prj/${this.nowPrjID}/spr/${board.id}`);
    });
  }
}
