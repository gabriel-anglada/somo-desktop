import { Component } from '@angular/core';
import {UsersProvider} from "../../../providers/users";
import {AlertProvider} from "../../../providers/alert";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})
export class UsersComponent {
  private users;

  constructor(private usersProvider: UsersProvider,
              private alertProvider: AlertProvider) {}

  ngOnInit(){
    this.usersProvider.getUsers().then(users => {
      this.users = users;
    })
  }

  onAddUser(){

  }

  onViewStars(){

  }

  onEdit(){

  }

  delete(user){
    this.usersProvider.deleteUser(user.id).then(() => {
      this.alertProvider.showAlert({
        message: 'alert.success.user_deleted_%userId%',
        messageParams: {userId:user.id},
        type: 'success'
      });
    })
  }
}
