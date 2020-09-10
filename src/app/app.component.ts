import { Component, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, FormFieldTypes
} from '@aws-amplify/ui-components';
import { UserService } from "./user.service";

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cs497-scrum-prj';

  get isPrj() { return this.location.path().startsWith("/prj"); }
  get isPrjDB() { return this.location.path() == "/prj/dashboard"; }
  get isUsr() { return this.location.path().startsWith("/user"); }

  get authState() { return this.usrSvr.authState; }
  get user() { return this.usrSvr.currentUserInfo(); }

  formFields: FormFieldTypes = [
    { type: "username" },
    { type: "password" },
    { type: "email" }
  ];

  constructor(
    private ref: ChangeDetectorRef,
    private location: Location,
    private usrSvr: UserService,
    public translate: TranslateService,
  ) {
    translate.setTranslation("en", {
      "topNav": {
        "official_guide": "Official Guide",
      }
    }, true);
    translate.setTranslation("zh_cn", {
      "topNav": {
        "official_guide": "官方指南",
      }
    }, true);
  }

  onChangeLang(lang: string) {
    this.translate.use(lang);
  }

  async ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.usrSvr.authState = authState;
      this.usrSvr.setUserByCognitoUser(authData as CognitoUserInterface);
      this.ref.detectChanges();

      if (authState === AuthState.SignedIn) {
        console.log('user successfully signed in!');
        // console.log('user data: ', authData);
      }
      if (!authData)
        console.log('user is not signed in...');
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  subcomponentRef;
  onActivate(componentRef) {
    this.subcomponentRef = componentRef;
  }
}
