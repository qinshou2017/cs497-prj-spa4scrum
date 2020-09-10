import { Injectable } from '@angular/core';
import { CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import { APIService } from "./API.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public authState: AuthState = AuthState.Loading;
  private user: {
    id: string,
    username: string,
    email: string,
    email_verified: boolean,
  } | null;

  constructor(private api: APIService) {
    this.user = null;
  }

  setUserByCognitoUser(cu: CognitoUserInterface) {
    console.log(cu, this);
    if (cu) this.user = {
      id: cu.attributes.sub,
      username: cu.username,
      email: cu.attributes.email,
      email_verified: cu.attributes.email_verified,
    };
    else this.user = null;
  }

  currentUserInfo() { return this.user; }
  async asyncCurrentUserInfo() {
    if (this.user) return this.user;
    return Auth.currentUserInfo().then(u => {
      if (u) this.user = {
        id: u.attributes.sub,
        username: u.username,
        email: u.attributes.email,
        email_verified: u.attributes.email_verified,
      };
      else this.user = null;
      return this.user;
    });
  }

  userPool = new Map();
  async getUserByID(cognitoID) {
    if (this.userPool.has(cognitoID))
      return this.userPool.get(cognitoID);
    let user = await this.api.GetUser(cognitoID);
    this.userPool.set(cognitoID, user);
    return user;
  }

  // constructor() {
  //   Auth.currentUserInfo().then(u => {
  //     console.log(u)
  //     if (u)
  //       this.user = {
  //         id: u.attributes.sub,
  //         username: u.username,
  //         email: u.attributes.email,
  //         email_verified: u.attributes.email_verified,
  //       };
  //     this.user = null;
  //   });
  // }


  // private user: {
  //   id: string,
  //   username: string,
  //   email: string,
  //   email_verified: boolean,
  // } | null = null;
  // _cognitoUser: CognitoUserInterface | undefined;
  // set cognitoUser(cu: CognitoUserInterface) {
  //   console.log(cu)
  //   this._cognitoUser = cu;
  //   this.user = {
  //     id: cu.attributes.sub,
  //     username: cu.username,
  //     email: cu.attributes.email,
  //     email_verified: cu.attributes.email_verified,
  //   };
  // };
  // get cognitoUser() {
  //   return this._cognitoUser;
  // };
  // authState: AuthState = AuthState.Loading;

  // constructor() {
  //   Auth.currentUserInfo().then(u => {
  //     console.log(u)
  //     if (u === null) this.user = null;
  //     this.user = {
  //       id: u.attributes.sub,
  //       username: u.username,
  //       email: u.attributes.email,
  //       email_verified: u.attributes.email_verified,
  //     };
  //   });
  // }

  // get currentUser() {
  //   if (this.authState === AuthState.SignIn)
  //     return this.user;
  //   return null;
  // }

  // async get() {
  //   return Auth.currentUserInfo()
  // }

}
