import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public usrService: UserService,
  ) { }

  nowUsr;
  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    this.nowUsr = await this.usrService.asyncCurrentUserInfo();
  }

}
