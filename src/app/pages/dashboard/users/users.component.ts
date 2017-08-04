import {Component, ViewChild} from '@angular/core';
import {UsersProvider} from "../../../providers/users";
import {AlertProvider} from "../../../providers/alert";
import {UserAddModalComponent} from "./user-add.component";
import {UserEditModalComponent} from "./user-edit.component";

@Component({
  selector: 'users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})
export class UsersComponent {
  private users = [];

  @ViewChild('userAddModal') userAddModal:UserAddModalComponent;
  @ViewChild('userEditModal') usereditModal:UserEditModalComponent;

  constructor(private usersProvider: UsersProvider,
              private alertProvider: AlertProvider) {}

  ngOnInit(){
    this.usersProvider.getUsers().then(users => {
      this.users = users;
    })
  }

  onAddUser(){
    this.userAddModal.initUser();
    this.userAddModal.open();
  }

  onEditUser(user){
    this.usereditModal.setUser(user);
    this.usereditModal.open();
  }

  onViewStars(){

  }

  onDeleteUser(user){
    this.usersProvider.deleteUser(user.identifier).then(() => {
      this.alertProvider.showAlert({
        message: 'alert.success.user_deleted_%userId%',
        messageParams: {userId:user.identifier},
        type: 'success'
      });
    })
  }
}
