import { Injectable } from '@angular/core';
import { UserService } from "../user.service";
import { APIService } from "../API.service";
import { GetUserWithProject, GetBoardsByProjectId } from "../graphql.service";
import { LoadingScreenService } from "../loading-screen/loading-screen.service";
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private usrService: UserService,
    private api: APIService,
    private loadingScreen: LoadingScreenService,
    private translate: TranslateService,
  ) {
    this.initBoard = this.initBoard.bind(this);
    this.api.OnCreateProjectListener.subscribe((event: any) => {
      console.log("OnCreateProjectListener", event);
      if (!this.currentPrjs) return;
      this.currentPrjs.push(event.value.data.onCreateProject);
    });
    this.api.OnUpdateProjectListener.subscribe((event: any) => {
      console.log("OnUpdateProjectListener", event);
      if (!this.currentPrjs) return;
      const prj = event.value.data.onUpdateProject;
      this.currentPrjs.some(p => {
        if (p.id === prj.id) {
          p.name = prj.name;
          p.description = prj.description;
          return true;
        }
        return false;
      });
    });
    this.api.OnDeleteProjectListener.subscribe((event: any) => {
      console.log("OnDeleteProjectListener", event);
      if (!this.currentPrjs) return;
      const did = event.value.data.onDeleteProject.id;
      this.currentPrjs.some((prj, i, prjs) => {
        if (prj.id === did) {
          prjs.splice(i, 1);
          return true;
        }
        return false;
      });
    });
    this.api.OnCreateProejctMembersListener.subscribe((event: any) => {
      console.log("OnCreateProejctMembersListener", event);
      if (!this.currentPrjs) return;
      const memberRelationship = event.value.data.onCreateProejctMembers;
      this.currentPrjs.find(prj => prj.id === memberRelationship.projectId)
        ?.members.items.push(memberRelationship);
    });
    this.api.OnDeleteProejctMembersListener.subscribe((event: any) => {
      console.log("OnDeleteProejctMembersListener", event);
      if (!this.currentPrjs) return;
      const memberRelationship = event.value.data.onDeleteProejctMembers;
      const prj = this.currentPrjs.find(prj => prj.id === memberRelationship.projectId);
      prj?.members.items.some((mr, i, mrs) => {
        if (mr.id === memberRelationship.id) {
          mrs.splice(i, 1);
          return true;
        }
        return false;
      });
    });
    this.api.OnCreateBoardListener.subscribe((event: any) => {
      console.log("OnCreateBoardListener", event);
      if (!this.currentPrjs) return;
      const board = event.value.data.onCreateBoard;
      this.currentPrjs.find(prj => prj.id === board.projectId)
        ?.boards.items.push(this.initBoard(board));
    });
    this.api.OnDeleteBoardListener.subscribe((event: any) => {
      console.log("OnDeleteBoardListener", event);
      if (!this.currentPrjs) return;
      const board = event.value.data.onDeleteBoard;
      const prj = this.currentPrjs.find(prj => prj.id === board.projectId);
      prj?.boards.items.some((b, i, bs) => {
        if (b.id === board.id) {
          bs.splice(i, 1);
          return true;
        }
        return false;
      });
    });
  }

  private initBoard(board) {
    board.createdTime = new Date(board.createdAt);
    board.updatedTime = new Date(board.updatedAt);
    board.cards?.items.forEach((card: any) => {
      card.createdTime = new Date(card.createdAt);
      card.updatedTime = new Date(card.updatedAt);
    });
    try {
      const name = JSON.parse(board.name),
            description = JSON.parse(board.description);
      Object.entries(name).forEach(([lang, tran]) => {
        if (lang === "default") return;
        this.translate.setTranslation(lang, {
          [board.category === "Sprint"? "sprint_board": "product_board"]: {
            [board.id]: {
              name: tran,
              description: description[lang],
            }
          },
        }, true);
      });
      board.name = name[name.default];
      board.description = description[description.default];
      board.langs = {name, description};
    } catch(e) {
      this.translate.setTranslation(this.translate.currentLang || this.translate.defaultLang, {
        [board.category === "Sprint"? "sprint_board": "product_board"]: {
          [board.id]: {
            name: board.name,
            description: board.description,
          }
        },
      }, true);
    }
    return board;
  }
  public currentPrjs = null;
  private _currentPrj = null;
  get currentPrj() { return this._currentPrj; }
  set currentPrj(prj) {
    this._currentPrj = prj;
    (async (cbs) => {
      for (let cb of cbs)
        await cb(prj);
    })(this.onProjectChangeCallbacks);
  }
  private _currentUsr = null;
  get currentUsr() { return this._currentUsr; }
  set currentUsr(cu) {
    this._currentUsr = cu;
    this.currentPrjs = cu.projects.items.map(ps => ps.project);
  }
  private onProjectChangeCallbacks = [];
  onProjectChange(callback) {
    this.onProjectChangeCallbacks.push(callback);
  }
  async getAllProjectsByCurrentUser() {
    this.loadingScreen.startLoading();
    // await (new Promise(s => window.setTimeout(s, 2000)));
    const uinfo = await this.usrService.asyncCurrentUserInfo();
    if (uinfo === null) return null;
    if (uinfo.id === this.currentUsr?.id) return this.currentPrjs;
    this.currentUsr = await GetUserWithProject(uinfo.id);
    this.loadingScreen.stopLoading();
    return this.currentPrjs;
  }

  async getProjectById(projectId) {
    if (!this.currentPrjs) await this.getAllProjectsByCurrentUser();
    return this.currentPrj = this.currentPrjs.filter(prj => prj.id === projectId)[0] || null;
  }

  async getAllBoardByCurrentPrj() {
    if (!this.currentPrj) {
      console.warn("need set currentPrj or call getProjectById before call getAllBoardByCurrentPrj");
      return null;
    }
    this.loadingScreen.startLoading();
    if (!this.currentPrjs) await this.getAllProjectsByCurrentUser();
    if (this.currentPrj.boards) {
      this.loadingScreen.stopLoading();
      return this.currentPrj.boards;
    }
    const boards = await GetBoardsByProjectId(this.currentPrj.id);
    boards.items.forEach(this.initBoard);
    this.loadingScreen.stopLoading();
    return this.currentPrj.boards = boards;
  }

}
