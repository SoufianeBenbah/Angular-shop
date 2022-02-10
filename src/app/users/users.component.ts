import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user.model";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] =[];

  constructor() { }

  ngOnInit(): void {
    this.users = User.getUsers;
  }

  open(user:User) {
    window.alert(
      user.name + '\n'+
      user.info
    )
  }

}
